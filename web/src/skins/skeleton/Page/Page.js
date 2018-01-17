(() => {

const Brick = global.skin.Brick
const q = global.q

skin.page = {
  render: renderPage
}

/**
 * props = {
 *   js: URL[]
 *   css: URL[]
 *   title: String
 * }
 */
function renderPage (props, children = '') {
  const js = props.js || []
  const css = props.css || []

  return (
    '<!doctype html>' +
    Brick.render({ tag: 'html', class: 'Page' }, [
      Brick.render({ tag: 'head' }, [
        Brick.render({ tag: 'meta', charset: 'utf-8' }),
        Brick.render({ tag: 'title' }, props.title),
        renderCSS('https://fonts.googleapis.com/css?family=Nunito+Sans:300,400'),
        `<script>
          const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
          document.querySelector('html').classList.toggle('safari', isSafari)
        </script>`,
        css.map(renderCSS)
      ]),
      Brick.render({ tag: 'body', class: 'Page__body' }, [
        props.body,
        Brick.render('Page__scripts', js.map(renderJS))
      ])
    ])
  )
}

function renderCSS (url) {
  return (
    Brick.render({ tag: 'link', rel: 'stylesheet', href: url })
  )
}

function renderJS (url) {
  return (
    Brick.render({ tag: 'script', src: url })
  )
}

})()
