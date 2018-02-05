var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var serveStatic = require('serve-static')
var connectMongo = require('connect-mongo')
var multipart = require('connect-multiparty')
var Ddos = require('ddos')

var env = process.env.NODE_ENV
var port = process.env.PORT || 3000
var mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/against'

global.requireSrc = requireSrc
global.env = env
global.isDev = env === 'development'
global.isProd = env === 'production'

var static = requireSrc('/static')
static.server().forEach(requireSrc)
var db = requireSrc('/db')
var MainCtrl = requireSrc('/ctrls/MainCtrl')
var AdminCtrl = requireSrc('/ctrls/AdminCtrl')
var UploadCtrl = requireSrc('/ctrls/UploadCtrl')
var EmailCtrl = requireSrc('/ctrls/EmailCtrl')

var config = {
  port,
  mongoUrl,
  public: isDev
    ? {
      '/': './src/',
      '/media': './media/',
      '/images': './images/',
      '/pdf': './pdf/',
    }
    : {
      '/media': './media/',
      '/images': './images/',
      '/build': './src/build/'
    }
}

;(function main () {
  handleAsyncAwaitErrors()
  startServer(config)
})()


async function startServer (params) {
  var app = express()
  var ddos = new Ddos({ burst: 10, limit: 15 })

  // Register middlewares
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(cookieParser())
  app.use(multipart())
  // app.use(ddos.express)

  // Serve public
  Object.keys(params.public).forEach(url => {
    var folder = params.public[url]
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
