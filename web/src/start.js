const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const serveStatic = require('serve-static')
const connectMongo = require('connect-mongo')
const multipart = require('connect-multiparty')

const env = process.env.NODE_ENV
const port = process.env.PORT || 3000
const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/against'

global.requireSrc = requireSrc
global.env = env
global.isDev = env === 'development'
global.isProd = env === 'production'

const static = requireSrc('/static')
static.server().forEach(requireSrc)
const db = requireSrc('/db')
const MainCtrl = requireSrc('/ctrls/MainCtrl')
const AdminCtrl = requireSrc('/ctrls/AdminCtrl')
const UploadCtrl = requireSrc('/ctrls/UploadCtrl')

const config = {
  port,
  mongoUrl,
  public: isDev
    ? {
      '/': './src/',
      '/media': './media/',
      '/images': './images/',
    }
    : {
      '/build': './src/build/'
    }
}

;(function main () {
  handleAsyncAwaitErrors()
  startServer(config)
})()


async function startServer (params) {
  const app = express()

  // Register middlewares
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(cookieParser())
  app.use(multipart())

  // Serve public
  Object.keys(params.public).forEach(url => {
    const folder = params.public[url]
    app.use(url, serveStatic(folder))
  })

  // Connect to Mongo
  await db.connect(params.mongoUrl)

  // Manage app
  UploadCtrl.manage(app)
  AdminCtrl.manage(app)
  MainCtrl.manage(app)

  // Launch on given port
  app.listen(params.port)
  console.log(`> Ready on localhost:${params.port}`)
}

function handleAsyncAwaitErrors () {
  process.on('unhandledRejection', err => console.error(err))
}

function requireSrc (module) {
  return require(path.join(__dirname, module))
}
