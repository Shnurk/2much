(() => {

global.ArticlePreview = ArticlePreview

function ArticlePreview (article) {
  return `
    <a class="news__item" href="${article.url}">
      <div class="news__itemImage" style="background-image: url(/media/large/${article.photos[0].fileName})"></div>
      <div class="news__itemTitle">${article.titlePretty}</div>
    </a>
  `;
}


})()
