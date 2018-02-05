(() => {

window.Layout = {}

;(function main () {
  Layout._onOverlayClick = hideOverlay
})()

var cls = {
  overlayHide: 'Layout__overlay_hide'
}

function hideOverlay ($overlay) {
  $overlay.classList.add(cls.overlayHide)
  setTimeout(() => {
    $overlay.remove()
  }, 600)
}

})()
