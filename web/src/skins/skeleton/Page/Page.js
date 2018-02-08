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
 *   withMetrika: false
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
        `
          <link rel="shortcut icon" href="/images/favicon.png"></link>
        `,
        renderCSS('https://fonts.googleapis.com/css?family=Nunito+Sans:300,400'),
        `<script>
          const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
          document.querySelector('html').classList.toggle('safari', isSafari)
        </script>`,
        css.map(renderCSS)
      ]),
      Brick.render({ tag: 'body', class: 'Page__body' }, [
        props.body,
        Brick.render('Page__scripts', js.map(renderJS)),
        props.withMetrika ? `
        <script type="text/javascript" >
            (function (d, w, c) {
                (w[c] = w[c] || []).push(function() {
                    try {
                        w.yaCounter47374432 = new Ya.Metrika2({
                            id:47374432,
                            clickmap:true,
                            trackLinks:true,
                            accurateTrackBounce:true
                        });
                    } catch(e) { }
                });

                var n = d.getElementsByTagName("script")[0],
                    s = d.createElement("script"),
                    f = function () { n.parentNode.insertBefore(s, n); };
                s.type = "text/javascript";
                s.async = true;
                s.src = "https://mc.yandex.ru/metrika/tag.js";

                if (w.opera == "[object Opera]") {
                    d.addEventListener("DOMContentLoaded", f, false);
                } else { f(); }
            })(document, window, "yandex_metrika_callbacks2");
        </script>
        <noscript><div><img src="https://mc.yandex.ru/watch/47374432" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
        ` : ''
      ])
    ])
  )
}

var rand = Math.round(Math.random() * 1000).toString()

function renderCSS (url) {
  return (
    Brick.render({ tag: 'link', rel: 'stylesheet', href: `${url}?v=${rand}` })
  )
}

function renderJS (url) {
  return (
    Brick.render({ tag: 'script', src: `${url}?v=${rand}` })
  )
}

})()
