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
var NewsItem = require('../NewsItem/NewsItem');
var Bookmodel = require('../Bookmodel/Bookmodel');
var Polaroids = require('../Model/Polaroids');


function App(url) {
  var content = '';

  // Base
  if (url === '/') {
    content = Intro();
  } else if (url === '/join') {
    content = Join();
  } else if (url === '/about') {
    content = About();
  } else if (url === '/contact') {
    content = Contact();

  // News
  } else if (url === '/news') {
    content = News('all');
  } else if (url === '/news/editorials') {
    content = News('editorials');
  } else if (url === '/news/campaigns') {
    content = News('campaigns');
  } else if (url === '/news/shows') {
    content = News('shows');
  } else if (url === '/news/item') {
    content = NewsItem();

  // Models
  } else if (url === '/women') {
    content = Women();
  } else if (url === '/men') {
    content = Men();
  } else if (url === '/model') {
    content = Model();
  } else if (url === '/polaroids') {
    content = Polaroids();
  } else if (url === '/bookmodel') {
    return Bookmodel();
  }

  return `
    <!doctype html>
    <head>
      <title>Against</title>
      <meta charset="utf-8" />
      <link rel="shortcut icon" href="fav.jpg" />
      <link rel="stylesheet"  href="/ui/App/app.css" />
      <link rel="stylesheet"  href="/ui/Slider/slider.css" />
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
      <link rel="stylesheet"  href="/ui/NewsItem/newsItem.css" />
      <link rel="stylesheet"  href="/ui/Bookmodel/bookmodel.css" />
      <link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet" />
    </head>
    <body>
      ${ url === '/bookmodel' ? '' : Header() }
      ${content}
      ${ url === '/' || url === '/bookmodel' ? '' : Footer() }
      <script  src="/ui/Join/photo_upload_preview.js"></script>
      <script  src="/ui/Slider/slider_logic.js"></script>
      <script  src="/ui/App/script.js"></script>
    </body>
  `;
}

module.exports = App;
