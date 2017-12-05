/**
 * props = {
 *   items: [
 *     { title: String, url: URL, targetBlank: [Boolean] }
 *     ...
 *   ]
 * }
 */
function Menu(props) {
  return `
    <div class="menu">
      ${props.items.map(Menu__item).join('')}
    </div>
  `;
}

function Menu__item(item) {
  var target = item.targetBlank ? 'target="_blank"' : ''

  return `
    <a class="menu__item" href="${item.url}" {target}>
      ${item.title}
    </a>
  `;
}

module.exports = Menu
