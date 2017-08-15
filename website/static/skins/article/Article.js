/**
 * props = {
 *   modelName: String
 *   title: String
 *   day: Number
 *   month: String
 *   year: Number
 *   photos: URL[]
 * }
 */
function Article(props) {
  return `
    <div class="article">
      <div class="article__title">
        <a href="/model" class="article__modelName">${props.modelName}</a>
        <span class="article__titleJob">for ${props.title}</span>
      </div>
      <div class="article__date">${props.day} . ${props.month} . ${props.year}</div>
      <div class="article__photos">
        ${props.photos.map(Article__photo).join('')}
      </div>
    </div>
  `;
}

function Article__photo(photo) {
  return `
    <img class="article__photo" src="${photo}" />
  `;
}

module.exports = Article;
