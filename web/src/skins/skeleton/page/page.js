/* global q */

;(() => {

skin.page = {
  render: renderPage
}


/**
 * props = {
 *   css: URL[]
 *   js: URL[]
 *   title: String
 *   body: HTML
 * }
 */
function renderPage (props) {
  const css = props.css || []
  const js = props.js || []

  return q.html`
    <!doctype html>
    <html class="page">
      <head>
        <meta charset="utf-8" />
        <title>${props.title}</title>
        ${renderCSS('https://fonts.googleapis.com/css?family=Nunito+Sans:300,400')}
        ${css.map(renderCSS)}
      </head>
      <body class="page__body">
        ${props.body}
        ${js.map(renderJS)}
      </body>
    </html>
  `
}


function renderCSS (url) {
  return q.html`
    <link rel="stylesheet" href="${url}" />
  `
}

function renderJS (url) {
  return q.html`
    <script src="${url}"></script>
  `
}

})()
