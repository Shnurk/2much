;(() => {

const $ = global.skin.Brick.render
const Header = global.skin.header
const Footer = global.skin.footer

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

  return (
    $(`Layout ${noPadding}`, [
      $('Layout__header', Header.render()),
      $('Layout__content', props.content),
      withFooter && $('Layout__footer', Footer.render())
    ])
  )
}

})()
