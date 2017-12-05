(() => {

const $$ = g.$$
const Resumable = g.Resumable

;(function main () {
  initUpload()
})()

window.skin.AdminForm = {
  _onSaveClick: onSaveClick,
  _onDeleteClick: onDeleteClick
}

function onDeleteClick (e) {
  if (!confirm('Are you sure?')) {
    e.preventDefault()
  }
}

async function onSaveClick(isEdit) {
  const data = serialize()
  const body = new FormData();
  body.append("json", JSON.stringify(data));
  const result = await fetch(location.pathname, { method: 'POST', body })
  location.href = "/admin/models";
}

function initUpload () {
  const r = new Resumable({ target: '/upload' })

  // TODO: improve
  r.assignBrowse($$('.AdminForm__section_upload .AdminForm__title'))
  r.assignDrop($$('.AdminForm__section_upload'))

  r.on('fileAdded', (file, e) => {
    r.upload()
    const $section = e.target.closest('.AdminForm__section_upload')
    if ($section.classList.contains('AdminForm__section_cover')) {
      $section.$('.AdminForm__content').innerHTML = (
        g.skin.PhotoLoad.render({ id: file.uniqueIdentifier })
      )
    } else {
      $section.$('.AdminForm__content').insertAdjacentHTML('beforeend', (
        g.skin.PhotoLoad.render({ id: file.uniqueIdentifier })
      ))
    }
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
      data = JSON.parse(data)
      g.skin.PhotoLoad.setPhoto($photoLoad, data.photo)
      $photoLoad.setAttribute('data-id', data.id)
    }
  })

  r.on('fileError', (file, message) => {
    console.log('ERROR!!!')
  })
}

function serialize () {
  return {
    name: $('input[name=name]').value,
    gender: Number($('select[name=gender]').value),
    instagram: $('input[name=instagram]').value,
    cover: getPhotos('cover')[0] || null,
    book: getPhotos('book'),
    polaroids: getPhotos('polaroids'),
    params: {
      height: Number($('input[name=height]').value),
      chest: Number($('input[name=chest]').value),
      waist: Number($('input[name=waist]').value),
      hips: Number($('input[name=hips]').value),
      shoe: Number($('input[name=shoe]').value),
      hair: $('input[name=hair]').value,
      eyes: $('input[name=eyes]').value,
    }
  }
}

function getPhotos (name) {
  const $photos = $$(`.AdminForm__section_${name} .PhotoLoad:not(.PhotoLoad_removed)`)
  return Array.from($photos).map($p => $p.dataset.id)
}
window.serialize = serialize


})()
