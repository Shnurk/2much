var connect = require('connect');
var App = require('./App');
var serveStatic = require('serve-static');
var app = connect();

app.use(serveStatic('static'));
app.use(server);
app.listen(8000);

function server(req, res) {
  res.end(`
    ${App()}
  `);
}

