/* global q */
/* global skin */

;(() => {

skin.articleCard = {
  render: renderArticleCard
}


/**
 * props = {
 *   title: String
 *   photo: URL
 *   url: URL
 * }
 */
function renderArticleCard(props) {
  return q.html`
    <a class="articleCard" href="${props.url}">
      <div class="articleCard__photo" style="background-image: url('${props.photo}')"></div>
      <div class="articleCard__title">${props.title}</div>
    </a>
  `;
}

})()
