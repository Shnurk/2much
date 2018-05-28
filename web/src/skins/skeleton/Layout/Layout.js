;(() => {

var $ = global.skin.Brick.render
var Header = global.skin.header
var Footer = global.skin.Footer

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
  var withFooter = !props.noFooter
  var noPadding = props.noPadding ? 'Layout_noPadding' : ''

  return html(`
    <div class="Layout ${noPadding}">
      <div class="Layout__header">${Header.render()}</div>
      <div class="Layout__content">${props.content}</div>
      ${withFooter ? html(`
        <div class="Layout__footer">${Footer.render()}</div>
      `) : ''}
    </div>
  `)
}

function html (str) {
  return str || ''
}

})()
