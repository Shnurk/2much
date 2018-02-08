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
  We are the model agency from Saint-Petersburg, Russia.<br/><br/>
  Our main idea is a friendly relationship between booker’s team and models.
  We are always glad to meet up models, stylists, photographers, and agencies
  all around the world. And we think this information is enough :)
`

})()
