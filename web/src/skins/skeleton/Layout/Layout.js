;(() => {

const $ = global.skin.Brick.render
const Header = global.skin.header
const Footer = global.skin.Footer

global.skin.layout = {
  render: renderLayout
}


/**
 * props = {
 *   content: HTML
 *   noFooter: [Boolean]
 *   noPadding: [Boolean]
 * }
 */
function renderLayout (props) {
  const withFooter = !props.noFooter
  const noPadding = props.noPadding ? 'Layout_noPadding' : ''

  return html(`
    <div class="Layout ${noPadding}">
      <div class="Layout__header">${Header.render()}</div>
      <div class="Layout__content">${props.content}</div>
      ${withFooter ? html(`
        <div class="Layout__footer">${Footer.render()}</div>
      `) : ''}
      ${props.isMain ? html(`
        <div class="Layout__overlay" onclick="Layout._onOverlayClick(this)">
          <img class="Layout__logoImage" src="/images/logo-enter.jpg" />
        </div>
      `) : ''}
    </div>
  `)
}

function html (str) {
  return str || ''
}

})()
