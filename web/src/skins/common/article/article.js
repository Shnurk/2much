/* global q */
/* global article */

;(() => {

skin.article = {
  render: renderArticle
}


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
function renderArticle(props) {
  return q.html`
    <div class="article">
      <div class="article__title">
        <a href="/model" class="article__modelName">${props.modelName}</a>
        <span class="article__titleJob">for ${props.title}</span>
      </div>
      <div class="article__date">${props.day} . ${props.month} . ${props.year}</div>
      <div class="article__photos">
        ${props.photos.map(renderPhoto).join('')}
      </div>
    </div>
  `;
}


function renderPhoto(photo) {
  return q.html`
    <img class="article__photo" src="${photo}" />
  `;
}

})()
