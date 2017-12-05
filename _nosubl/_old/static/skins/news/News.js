var Menu = require('../menu/Menu')
var ArticlePreview = require('../articlePreview/ArticlePreview')

/**
 * props = {
 *   articles: [
 *     { photo: URL, title: String, url: URL }
 *     ...
 *   ]
 * }
 */
function News(props) {
  return `
    <div class="news">
      ${Menu({
        items: [
          { title: 'all', url: '/news' },
          { title: 'editorials', url: '/news/editorials' },
          { title: 'campaigns', url: '/news/campaigns' },
          { title: 'shows', url: '/news/shows' },
        ],
      })}

      <div class="news__articles">
        ${props.articles.map(ArticlePreview).join('')}
      </div>
    </div>
  `;
}

module.exports = News
