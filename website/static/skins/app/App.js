var About = require('../about/About')
var Article = require('../article/Article')
var ArticlePreview = require('../articlePreview/ArticlePreview')
var Book = require('../book/Book')
var Contact = require('../contact/Contact')
var Footer = require('../footer/Footer')
var Header = require('../header/Header')
var Intro = require('../intro/Intro')
var Join = require('../join/Join')
var Layout = require('../layout/Layout')
var Menu = require('../menu/Menu')
var Model = require('../model/Model')
var News = require('../news/News')
var Slider = require('../slider/Slider')

function App(url) {
  var ivan = db.Models[0]
  var kolya = db.Models[1]

  var article1 = db.Articles[0]
  var article2 = db.Articles[1]

  return `
    <!doctype html>
    <head>
      <title>2Much</title>
      <meta charset="utf-8" />
      <link rel="shortcut icon" href="fav.jpg" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Playfair+Display" />
      <link rel="stylesheet" href="/skins/app/app.css" />

      <link rel="stylesheet" href="/skins/about/about.css" />
      <link rel="stylesheet" href="/skins/article/article.css" />
      <link rel="stylesheet" href="/skins/articlePreview/articlePreview.css" />
      <link rel="stylesheet" href="/skins/book/book.css" />
      <link rel="stylesheet" href="/skins/contact/contact.css" />
      <link rel="stylesheet" href="/skins/footer/footer.css" />
      <link rel="stylesheet" href="/skins/header/header.css" />
      <link rel="stylesheet" href="/skins/intro/intro.css" />
      <link rel="stylesheet" href="/skins/join/join.css" />
      <link rel="stylesheet" href="/skins/layout/layout.css" />
      <link rel="stylesheet" href="/skins/menu/menu.css" />
      <link rel="stylesheet" href="/skins/model/model.css" />
      <link rel="stylesheet" href="/skins/news/news.css" />
      <link rel="stylesheet" href="/skins/slider/slider.css" />
    </head>
    <body>
      ${Layout({
        content: 'CONTENT',
      })}
      <script src="/skins/intro/Intro_slider.js"></script>
      <script src="/skins/join/photo_upload_preview.js"></script>
      <script src="/skins/slider/Slider_0.js"></script>
    </body>
  `;
}

var db = {
  Models: [
    {
      id: 1,
      name: 'Ivan Kos',
      slug: 'ivan_kos',
      gender: 1,
      params: {
        height: 189,
        chest: 56,
        waist: 42,
        hips: 37,
        shoe: 42,
        hair: 'Brown',
        eyes: 'Brown',
      },
      instagram: 'https://instagram.com/ivan',
      book: [
        '/images/1.jpg',
        '/images/2.jpg',
        '/images/3.jpg',
        '/images/main.jpg',
        '/images/man5.jpg',
      ],
      polaroids: [ '/images/man1.jpg', '/images/man2.jpg' ],
    },
    {
      id: 2,
      name: 'Kolya',
      slug: 'kolya',
      gender: 1,
      params: {
        height: 192,
        chest: 40,
        waist: 42,
        hips: 35,
        shoe: 50,
        hair: 'White',
        eyes: 'Black',
      },
      instagram: 'https://instagram.com/kol_ya_n',
      book: [ '/images/man2.jpg', '/images/man4.jpg' ],
      polaroids: [ '/images/man3.jpg', '/images/man4.jpg' ],
    },
  ],

  Articles: [
    {
      id: 1,
      title: 'SUNNEI - SUMMER 2018 FASHIONSHOW',
      modelId: 1,
      date: {
        day: 28,
        month: 11,
        year: 2016,
      },
      photos: [ 'http://localhost:8000/images/1.jpg', 'http://localhost:8000/images/2.jpg' ],
      category: null,
    },
    {
      id: 2,
      title: 'SUNNEI - SUMMER 2028 FASHIONSHOW',
      modelId: 2,
      date: {
        day: 28,
        month: 11,
        year: 2016,
      },
      photos: [ 'http://localhost:8000/images/3.jpg', 'http://localhost:8000/images/2.jpg' ],
      category: null,
    },
  ],
}

// ${Intro({
//   items: [
//     { photo: '/images/main.jpg', modelName: 'Mike', client: 'Blossom' },
//     { photo: '/images/1.jpg', modelName: 'Nikole', client: 'Sink' },
//     { photo: '/images/2.jpg', modelName: 'Jonny', client: 'Sink' },
//     { photo: '/images/3.jpg', modelName: 'Mike', client: 'Blossom' },
//   ],
// })}
// ${News({
//   articles: [
//     { title: 'SUNNEI - SUMMER 2018 FASHIONSHOW', photo: 'http://localhost:8000/images/1.jpg', url: '/' },
//     { title: 'SUNNEI - SUMMER 2018 FASHIONSHOW', photo: 'http://localhost:8000/images/2.jpg', url: '/' },
//     { title: 'SUNNEI - SUMMER 2018 FASHIONSHOW', photo: 'http://localhost:8000/images/3.jpg', url: '/' },
//     { title: 'SUNNEI - SUMMER 2018 FASHIONSHOW', photo: 'http://localhost:8000/images/4.jpg', url: '/' },
//     { title: 'SUNNEI - SUMMER 2018 FASHIONSHOW', photo: 'http://localhost:8000/images/1.jpg', url: '/' },
//     { title: 'SUNNEI - SUMMER 2018 FASHIONSHOW', photo: 'http://localhost:8000/images/2.jpg', url: '/' },
//     { title: 'SUNNEI - SUMMER 2018 FASHIONSHOW', photo: 'http://localhost:8000/images/3.jpg', url: '/' },
//   ]
// })}
// ${Join()}
// ${About()}
// ${Contact()}
// ${Article({
//   modelName: 'Dick Senior',
//   title: 'Sunnei - spring/summer 2018 fashionshow',
//   day: 21,
//   month: 'July',
//   year: 2017,
//   photos: [
//     '/images/man2.jpg',
//     '/images/man4.jpg',
//     '/images/man3.jpg',
//     'http://localhost:8000/images/1.jpg',
//     'http://localhost:8000/images/2.jpg',
//   ],
// })}
// ${Model({
//   url: `/${ivan.slug}`,
//   name: ivan.name,
//   height: makeCmInches(ivan.params.height),
//   chest: makeCmInches(ivan.params.chest),
//   waist: makeCmInches(ivan.params.waist),
//   hips: makeCmInches(ivan.params.hips),
//   photo: ivan.book[0],
// })}
// ${Book({
//   name: ivan.name,
//   type: 'book',
//   urls: {
//     book: `/${ivan.slug}`,
//     polaroids: `/${ivan.slug}/polaroids`,
//     instagram: ivan.instagram,
//     pdf: `/${ivan.slug}/pdf`,
//   },
//   photos: ivan.book,
//   params: {
//     height: makeCmInches(ivan.params.height),
//     chest: makeCmInches(ivan.params.chest),
//     waist: makeCmInches(ivan.params.waist),
//     hips: makeCmInches(ivan.params.hips),
//     shoe: [ ivan.params.shoe, 8 ],
//     hair: ivan.params.hair,
//     eyes: ivan.params.eyes,
//   }
// })}
// ${Header()}
// ${Footer()}
// ${ArticlePreview({
//   photo: article1.photos[0],
//   title: article1.title,
//   url: `/news/${article1.id}`,
// })}
// ${ArticlePreview({
//   photo: article2.photos[0],
//   title: article2.title,
//   url: `/news/${article2.id}`,
// })}

function makeCmInches(cm) {
  return [ cm, cmToInches(cm) ]
}

/**
 * cmToInches(188) => 6'2''
 */
function cmToInches(cm) {
  var realFeet = cm / 30.48
  var feet = Math.floor(realFeet)
  var inches = Math.round((realFeet - feet) * 12)
  return feet + "&prime;" + inches + '&Prime;'
}

module.exports = App
