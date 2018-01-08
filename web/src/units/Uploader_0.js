(() => {

const $$ = g.$$
const Resumable = g.Resumable

;(function main () {
  // initUpload()
})()

function initUpload () {
  const r = new Resumable({ target: '/upload' })

  // TODO: improve
  r.assignBrowse($$('.DropZone'))
  r.assignDrop($$('.DropZone'))

  r.on('fileAdded', (file, e) => {
    console.log('added')
    r.upload()
    const $dropZone = e.target.closest('.DropZone')
    $dropZone.$('.DropZone__photos').insertAdjacentHTML('beforeend', (
      g.skin.PhotoLoad.render({ id: file.uniqueIdentifier })
    ))
  })

  r.on('fileProgress', (file, progress) => {
    console.log('progress')
    const $photoLoad = $(`.PhotoLoad[data-id="${file.uniqueIdentifier}"]`)
    g.skin.PhotoLoad.setProgress($photoLoad, file.progress() * 100)
  })

  r.on('fileSuccess', (file, data) => {
    console.log('success')
    const $photoLoad = $(`.PhotoLoad[data-id="${file.uniqueIdentifier}"]`)
    data = JSON.parse(data)
    g.skin.PhotoLoad.setPhoto($photoLoad, data.photo)
    $photoLoad.setAttribute('data-id', data.id)
  })

  r.on('fileError', (file, message) => {
    console.log('error')
    console.log('ERROR!!!')
  })

  r.on('fileRetry', (file, message) => {
    console.log('retry')
  })
}

})()
