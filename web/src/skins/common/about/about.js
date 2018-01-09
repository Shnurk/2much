(() => {

const b = global.skin.Brick.render

global.skin.about = {
  render: renderAbout
}

function renderAbout() {
  const text = paragraphs
    .split('\n\n')
    .map(p => p.trim().replace(/\s+/g, ' '))
    .join('<br><br>')

  return (
    b('About', (
      b('About__container', [
        b('About__title', title),
        b('About__text', text)
      ])
    ))
  )
}

var title = 'Against Model Management'

var paragraphs = `
  Some words about Against Model Management
`

})()
