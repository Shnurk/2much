global.env = process.env.NODE_ENV
global.isDev = env === 'dev'
global.isProd = env === 'prod'
global.requireSrc = requireSrc

const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const serveStatic = require('serve-static')
const connectMongo = require('connect-mongo')
const multipart = require('connect-multiparty')

const static = requireSrc('/static')
static.getServer().forEach(requireSrc)
const db = requireSrc('/db')
const MainCtrl = requireSrc('/ctrls/MainCtrl')
const AdminCtrl = requireSrc('/ctrls/AdminCtrl')
const UploadCtrl = requireSrc('/ctrls/UploadCtrl')

const config = {
  dev: {
    port: 3000,
    mongo: {
      url: 'mongodb://localhost:27017/twomuch',
      secret: '2much_secret'
    },
    public: {
      '/': './src/',
      '/media': './media/'
    }
  },

  prod: {
    port: 3000,
    mongo: {
      url: 'mongodb://localhost:27017/twomuch',
      secret: '2much_secret'
    },
    public: {
      '/build': './src/build/'
    }
  }
}

;(function main () {
  startServer(config[env])
  handleAsyncAwaitErrors()
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
  await db.connect(params.mongo.url)

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
