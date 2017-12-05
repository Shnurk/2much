(() => {

const PhotoLoad = g.skin.PhotoLoad || (g.skin.PhotoLoad = {})

Object.assign(PhotoLoad, {
  setPhoto,
  setProgress,
})

;(function main () {
  PhotoLoad._onRemoveClick = toggleRemove
})()

function toggleRemove (e, elem) {
  const $photoLoad = elem.closest('.PhotoLoad');
  $photoLoad.classList.toggle('PhotoLoad_removed')
}

function setPhoto ($self, photo) {
  $self.style.backgroundImage = `url('${photo}')`
}

function setProgress ($self, percent) {
  const $line = $self.$(sel.progressLine)
  if (percent === 100) {
    $line.parentElement.remove()
  } else {
    $line.style.width = `${percent}%`
  }
}

var sel = {
  progressLine: '.PhotoLoad__progressLine'
}

})()
