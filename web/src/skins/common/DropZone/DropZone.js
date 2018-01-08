(() => {

g.skin.DropZone = {
  render: renderDropZone
}

/**
 * props = {
 *   helpMessage: String
 * }
 */
function renderDropZone (props) {
  return q.html`
    <div class="DropZone">
      <div class="DropZone__photos">
      </div>
    </div>
  `
}

})()
