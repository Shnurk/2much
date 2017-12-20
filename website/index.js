var connect = require('connect')
var App = require('./static/ui/app/App')
//  var App = require('./static/skins/app/App')
var serveStatic = require('serve-static')
var pdf = require('html-pdf')
var ObjectID = require('mongodb').ObjectID
var MongoClient = require('mongodb').MongoClient
var app = connect()
var url = 'mongodb://localhost:27017/twomuch'

app.use(serveStatic('static'))
app.use(server)
app.listen(8000)

MongoClient.connect(url, function(err, db) {
  if (err) {
    console.log('ERRROR');
    console.log(err);
  } else {
    console.log('CONNECTED');

    var Articles = db.collection('articles');

    Articles.find().toArray(function(err, items) {
      Articles.find({ _id: items[1].articleId }).toArray(function(err, items) {
        console.log(items);
      })
    });
  }
});

function server(req, res) {
  var url = req.url;

  if (url === '/create-pdf') {
    htmlToPdf(err => res.end(err || 'ok'));
    return;
  }

  res.end(App(url));
}

function htmlToPdf(next) {
  var html = App('/bookmodel');
  const opts = {
    format: 'A4',
    orientation: 'landscape',
    base: 'http://localhost:8000',
  };

  pdf.create(html, opts).toFile('./static/pdfs/model.pdf', (err, result) => {
    if (err) console.error(err);
    next(err);
  });
}

