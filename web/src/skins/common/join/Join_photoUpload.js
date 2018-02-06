window.Join = {
  _onSubmit (e) {
    $$('.PhotoLoad').forEach($photoLoad => {
      var id = $photoLoad.dataset.id
      $photoLoad.insertAdjacentHTML('afterend', html(`
        <input name="photo" value="${id}" />
      `))
    })
  }
}


function html (str) {
  return str
}

initUpload()
function initUpload () {
  const r = new Resumable({ target: '/upload', maxFiles: 1 })

  // TODO: improve
  r.assignBrowse($$('.upload__photo'))
  r.assignDrop($$('.upload__photo'))

  r.on('fileAdded', (file, e) => {
    var $input = e.target
    var $photo = $input.closest('.upload__photo')
    r.upload()
    $photo.insertAdjacentHTML(
      'beforeend',
      g.skin.PhotoLoad.render({ id: file.uniqueIdentifier })
    )
  })

  r.on('fileProgress', (file, progress) => {
    const $photoLoad = $(`.PhotoLoad[data-id="${file.uniqueIdentifier}"]`)
    if ($photoLoad) {
      g.skin.PhotoLoad.setProgress($photoLoad, file.progress() * 100)
    }
  })

  r.on('fileSuccess', (file, data) => {
    const $photoLoad = $(`.PhotoLoad[data-id="${file.uniqueIdentifier}"]`)
    if ($photoLoad) {
      if (data !== '0') {
        data = JSON.parse(data)
        g.skin.PhotoLoad.setPhoto($photoLoad, data.photo)
        $photoLoad.setAttribute('data-id', data.id)
      }
    }
  })

  r.on('fileError', (file, message) => {
    console.log('file error')
    console.log('ERROR!!!')
  })

  r.on('fileRetry', (file) => {
    // console.log('file retry')
  })
}
