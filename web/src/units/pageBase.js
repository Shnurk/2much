/* global state */
/* global skin */
/* global unit */

const {generateHtml, raw} = require('../lib/epos.js')

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
    class: props.type,
    withMetrika: global.isProd,
    title: 'AGAINST MANAGEMENT',
    body: skin.layout.render({
      noPadding: props.type === 'main',
      content: buildContent(props),
      noFooter: props.type === 'main'
    })
  })
}


function buildContent (props) {
  switch (props.type) {
    case 'main':
      const articles = props.articles.map(a => {
        return {
          title: a.titlePretty,
          cover: `/media/large/${a.photos[0].fileName}`
        }
      })

      return skin.Intro.render({
        articles
      })
      break

    case 'news':
      return props.articles.reverse().map(ArticlePreview)
      break

    case 'article':
      const article = props.article

      const titles = []
      let title = article.title

      while (true) {
        const index = title.indexOf('{model')

        if (index === -1) {
          break
        }

        const number = Number(title.split('{model')[1].split('}')[0])
        const model = article.models[number - 1]

        titles.push({ text: title.slice(0, index) })
        titles.push({ text: model.name, url: `/models/${model.slug}` })
        title = title.split('}').slice(1).join('}')
      }

      if (title) {
        titles.push({ text: title })
      }

      return skin.NewsItem.render({
        title: titles,
        photos: article.photos.map(p => `/media/large/${p.fileName}`),
        date: article.date.day ? {
          day: article.date.day,
          month: {
            1: 'January',
            2: 'February',
            3: 'March',
            4: 'April',
            5: 'May',
            6: 'June',
            7: 'July',
            8: 'August',
            9: 'September',
            10: 'October',
            11: 'November',
            12: 'December'
          }[article.date.month],
          year: article.date.year
        } : null
      })

    case 'models':
      return generateHtml({
        class: 'modelBlocks',
        inner: [
          renderModelBlock('Boys', props.boys),
          renderModelBlock('Girls', props.girls)
        ]
      })

      function renderModelBlock (title, persons) {
        return {
          class: 'modelBlock',
          inner: [
            {
              class: 'modelBlock__title',
              inner: title
            },
            {
              class: 'modelBlock__models',
              inner: raw(persons.map(p => {
                const { height, chest, waist, hips } = p.params
                return skin.modelCard.render({
                  url: `/models/${p.slug}`,
                  name: p.name,
                  photo: p.cover ? `/media/large/${p.cover.fileName}` : null,
                  height: { cm: height, inch: cmToInches(height) },
                  chest: { cm: chest, inch: cmToInches(chest) },
                  waist: { cm: waist, inch: cmToInches(waist) },
                  hips: { cm: hips, inch: cmToInches(hips) },
                })
              }).join(''))
            }
          ]
        }
      }
      break

    case 'model':
    case 'polaroids':
      const p = props.person
      const photos = props.type === 'model' ? p.book : p.polaroids
      const { height, chest, waist, hips, shoe, hair, eyes } = p.params
      const photosPrepared = []

      let isFirst = props.type === 'model'
      let isNeedToFillVertical = false
      photos.forEach(photo => {
        const isVertical = photo.ratio < 1
        const url = `/media/large/${photo.fileName}`

        if (isFirst) {
          photosPrepared.push([ url ])
          isFirst = false
        } else if (isVertical) {
          if (isNeedToFillVertical) {
            photosPrepared[photosPrepared.length - 1].push(url)
            isNeedToFillVertical = false
          } else {
            photosPrepared.push([ url ])
            isNeedToFillVertical = true
          }
        } else {
          photosPrepared.push(url)
          isNeedToFillVertical = false
        }
      })

      return skin.Model.render({
        name: p.name,
        bookUrl: `/models/${p.slug}`,
        polaroidsUrl: `/models/${p.slug}/polaroids`,
        instagramUrl: `https://instagram.com/${p.instagram}`,
        pdfUrl: `/pdf/${p.slug}.pdf`,
        photos: photosPrepared,
        isBook: props.type === 'model',
        params: {
          height: { cm: height, inch: cmToInches(height) },
          chest: { cm: chest, inch: cmToInches(chest) },
          waist: { cm: waist, inch: cmToInches(waist) },
          hips: { cm: hips, inch: cmToInches(hips) },
          shoe,
          hair,
          eyes
        }
      })

    case 'about':
      return skin.about.render()
      break

    case 'contact':
      return skin.Contact.render()
      break

    case 'join':
      return skin.join.render(props.success)
      break
  }
}

function cmToInches(cm) {
  var realFeet = cm / 30.48
  var feet = Math.floor(realFeet)
  var inches = Math.round((realFeet - feet) * 12)
  return feet + "&prime;" + inches + '&Prime;'
}

})()
