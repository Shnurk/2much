(() => {

const q = g.q

g.skin.PhotoLoad = {
  render: renderPhotoLoad
}

/**
 * props = {
 *   id: String
 *   photo: [URL]
 *   percent
 * }
 */
function renderPhotoLoad (props = {}) {
  const photo = props.photo
  const style = photo
    ? q.attr('style', `background-image: url('${photo}')`)
    : ''

  const onRemoveClick = q.onClick('skin.PhotoLoad._onRemoveClick', 'event', 'this')

  return q.html`
    <div class="PhotoLoad" ${style} data-id="${props.id}">
      <div class="PhotoLoad__remove" ${onRemoveClick}>✕</div>
      ${props.percent === 100 ? '' : q.html`
        <div class="PhotoLoad__progress">
          <div class="PhotoLoad__progressLine"></div>
        </div>
      `}
    </div>
  `
}

})()
