var Header = require('../header/Header')
var Footer = require('../footer/Footer')

/**
 * props = {
 *   content: HTML
 * }
 */
function Layout(props) {
  return `
    <div class="layout">
      <div class="layout__header">${Header()}</div>
      <div class="layout__content">${props.content}</div>
      <div class="layout__footer">${Footer()}</div>
    </div>
  `;
}

module.exports = Layout
