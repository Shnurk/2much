/**
 * props = {
 *   photo: URL
 *   title: String
 *   url: URL
 * }
 */
function ArticlePreview(props) {
  return `
    <a class="articlePreview" href="${props.url}">
      <div class="articlePreview__photo" style="background-image: url('${props.photo}')"></div>
      <div class="articlePreview__title">${props.title}</div>
    </a>
  `;
}

module.exports = ArticlePreview;
