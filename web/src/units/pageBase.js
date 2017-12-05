/* global state */
/* global skin */
/* global unit */

;(() => {

unit.page = {
  build: buildBasePage
}


/**
 * props = {
 *   css: URL[]
 *   js: URL[]
 *   persons
 * }
 */
function buildBasePage (props) {
  return skin.page.render({
    js: props.js,
    css: props.css,
    title: '2much',
    body: skin.layout.render({
      content: buildContent(props.persons),
      noFooter: true
    })
  })
}


function buildContent (persons) {
  return persons.map(p => {
    return skin.modelCard.render({
      url: '/',
      name: p.name,
      photo: p.cover ? `/media/large/${p.cover.fileName}` : null,
      height: { cm: p.params.height, inch: cmToInches(p.params.height) },
      chest: { cm: p.params.chest, inch: cmToInches(p.params.chest) },
      waist: { cm: p.params.waist, inch: cmToInches(p.params.waist) },
      hips: { cm: p.params.hips, inch: cmToInches(p.params.hips) },
    })
  })

  // const page = state.getPage();

  // if (page.type === 'modelsList') {
  //   const models = page.gender === 1
  //     ? state.getMaleModels()
  //     : state.getFemaleModels()

  //   return models.map(skin.modelCard.render)
  // }
}

function cmToInches(cm) {
  var realFeet = cm / 30.48
  var feet = Math.floor(realFeet)
  var inches = Math.round((realFeet - feet) * 12)
  return feet + "&prime;" + inches + '&Prime;'
}

})()
