var Header = require('../Header/Header');
var Footer = require('../Footer/Footer');
var Join = require('../Join/Join');
var Intro = require('../Intro/Intro');
var Women = require('../Women/Women');
var Men = require('../Men/Men');
var News = require('../News/News');
var About = require('../About/About');
var Model = require('../Model/Model');
var Contact = require('../Contact/Contact');


function App(url) {
  var content = '';

  if (url === '/') {
    content = Intro();
  } else if (url === '/join') {
    content = Join();
  } else if (url === '/about') {
    content = About();
  } else if (url === '/contact') {
    content = Contact();
  } else if (url === '/news') {
    content = News();
  } else if (url === '/women') {
    content = Women();
  } else if (url === '/men') {
    content = Men();
  } else if (url === '/model') {
    content = Model();
  }

  return `
    <!doctype html>
    <head>
      <title>2Much</title>
      <meta charset="utf-8" />
      <link rel="shortcut icon" href="fav.jpg" />
      <link rel="stylesheet"  href="/ui/App/app.css" />
      <link rel="stylesheet"  href="/ui/Header/header.css" />
      <link rel="stylesheet"  href="/ui/Footer/footer.css" />
      <link rel="stylesheet"  href="/ui/Join/join.css" />
      <link rel="stylesheet"  href="/ui/Contact/contact.css" />
      <link rel="stylesheet"  href="/ui/Intro/intro.css" />
      <link rel="stylesheet"  href="/ui/Women/women.css" />
      <link rel="stylesheet"  href="/ui/Model/model.css" />
      <link rel="stylesheet"  href="/ui/About/about.css" />
      <link rel="stylesheet"  href="/ui/Contact/contact.css" />
      <link rel="stylesheet"  href="/ui/Men/men.css" />
      <link rel="stylesheet"  href="/ui/News/news.css" />
      <link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet" />
    </head>
    <body>
      ${Header()}
      ${content}
      ${Footer()}
      <script  src="/ui/Join/photo_upload_preview.js"></script>
      <script  src="/ui/App/script.js"></script>
    </body>
  `;
}

module.exports = App;
