var Header = require('./static/ui/Header/Header');
var Footer = require('./static/ui/Footer/Footer');

function App() {
  return `
    <!doctype html>
    <title>2Much</title>
    <link rel="stylesheet" href="/ui/Header/header.css" />
    <link rel="stylesheet" href="/ui/Footer/footer.css" />
    <body>
      ${Header()}
      ${Header()}
      ${Footer()}
    </body>
  `;
}

module.exports = App;
