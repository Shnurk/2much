var articles = [
  {
    photo: '/images/1.jpg',
    title: 'SUNNEI - SUMMER 2018 FASHIONSHOW',
    url: '/news/item',
    wide: false,
    type: 'editorials'
  },
  {
    photo: '/images/2.jpg',
    title: 'SUNNEI - SPRING/SUMMER 2018 FASHIONSHOW',
    url: '/news/item',
    wide: false,
    type: 'editorials'
  },
  {
    photo: '/images/main.jpg',
    title: 'SUNNEI - SPRING/SUMMER 2018 FASHIONSHOW',
    url: '/news/item',
    wide: false,
    type: 'campaigns'
  },
  {
    photo: '/images/3.jpg',
    title: 'SUNNEI - SPRING/SUMMER 2018 FASHIONSHOW',
    url: '/news/item',
    wide: true,
    type: 'shows'
  },
  {
    photo: '/images/1.jpg',
    title: 'SUNNEI - SUMMER 2018 FASHIONSHOW',
    url: '/news/item',
    wide: false,
    type: 'campaigns'
  },
];

function News_Item(article) {
  var classWide = article.wide ? 'news__item_wide' : '';

  return `
    <a class="news__item ${classWide}" href="${article.url}">
      <div class="news__itemImage" style="background-image: url(${article.photo})"></div>
      <div class="news__itemTitle">${article.title}</div>
    </a>
  `;
}

function News(type) {
  function byType(article) {
    if (type === 'all') {
      return true;
    }

    if (article.type === type) {
      return true;
    }

    return false;
  }

  return `
    <div class="layout__news">
      <div class="news__menu">
        <a class="news__menuItem" href="/news">all</a>
        <a class="news__menuItem" href="/news/editorials">editorials</a>
        <a class="news__menuItem" href="/news/campaigns">campaigns</a>
        <a class="news__menuItem" href="/news/shows">shows</a>
      </div>
      <div class="news">
        ${articles.filter(byType).map(News_Item).join('')}
      </div>
    </div>
  `
}

module.exports = News;
