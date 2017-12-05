var fs = require('fs');
var App = require('./static/ui/App/App');
var pdf = require('html-pdf');

var html = fs.readFileSync('./bookmodel.html').toString();
console.log(html);
const opts = {
  format: 'A4',
  base: 'file:///Users/imkost/Projects/2much/website',
};

pdf.create(html, opts).toFile('https://localhost:8000', (err, result) => {
  if (err) console.error(err);
  console.log('done');
});

