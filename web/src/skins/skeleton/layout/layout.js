/* global q */
/* global skin */

;(() => {

skin.layout = {
  render: renderLayout
}


/**
 * props = {
 *   content: HTML
 *   noFooter: [Boolean]
 * }
 */
function renderLayout (props) {
  const withFooter = !props.noFooter

  return q.html`
    <div class="layout">
      <div class="layout__header">
        ${skin.header.render()}
      </div>
      <div class="layout__content">
        ${props.content}
      </div>
      ${withFooter && renderFooter()}
    </div>
  `
}


function renderFooter () {
  return q.html`
    <div class="layout__footer">
      ${skin.footer.render()}
    </div>
  `
}

})()
