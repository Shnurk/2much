/**
 * props = {
 *   still: URL
 *   subs: String
 *   progress: 12 // in percents
 * }
 */
skin.player.render(props) {
}

unit.player.build(showId, season, episode, frameIndex) {
  const frame = state.getFrame(showId, season, episode, frameIndex)
  return skin.player.render(frame)
}



goTo (url) {
  const page = parseUrl(url)

  if (page.show ===)
}

applyPage (page)
  const otherType

  if (otherType) {
    unit.page.rebuild()
  } else {
    switch (page.type) {
      case 'show':
        page.showId => unit.page.rebuildShow()
        page.season => unit.page.setFrame()
        page.episode => unit.page.setFrame()
        page.frameIndex => unit.page.setFrame()
      }
    }
  }


page: oneOf([
  {
    type: 'settings'
    tab: common/security/privacy/notifications/black_list/transfers
  }
])


navGo('/') {
  if (pageTypeIsSame) {
    if (page.type === 'settings') {
      if (page.tab is different) {
        state.setPage(page)
        unit.page.settings.rebuildContent()
      }
    }
  }
}


page oneOf(
  {
    type: 'main'
  }
  {
    type: 'about'
  }
  {
    type: 'modelList'
    gender: 0/1
  }
  {
    type: 'model'
    section: book/polaroids
  }
  {
    type: ''
  }
  {
    type: 'show'
    showId: 'got'
    season: 1
    episode: 0
    frameIndex: 0
  }
)

page = {
  type: 'main'
}

page {
  type: 'main'

  main: {
    category:
  }
  show: {
    showId: 'got'
    season: 1
    episode: 0
    frameIndex: 0
  }
}

/got/s01e01
/got/s01e01/1





goToUrl (url) {
  const curPage = state.getPage()
  const page = parseUrl(url)

  state.setPage(page)

  unit.player.setEpisode()
  unit.page.setContent()

  if (page.type === curPage.type) {
    if (page.type === 'show') {
      if (page.episode !== curPage.episode) {
        unit.curEpisodePlayer.rebuild()
      }
    }
  }

  if (page.type !== curPage.type) {
    unit.page.rebuild()
  }
}



function buildModel (modelId, section) {
  const model = state.getModel(modelId)
  const photos = (
    section === 'book' ? model.book :
    section === 'polaroids' ? model.polaroids :
    []
  )

  const urls = {
    book: nav.url.model.book(modelId),
    polaroids: nav.url.model.polaroids(modelId),
    instagram: model.instagram,
    pdf: nav.url.model.pdf(modelId)
  }

  return skin.model.render({
    name: model.name,
    params: model.params,
    urls,
    photos,
    section
  })
}


timeline

nav = {
  url: {

  },

  dataToUrl,
  urlToData,

  // client
  go() {}
  back() {}
  forward() {}
}




nav.url = {
  men,
  women,
  model: {
    book,
    polaroids,
  },
  news,
  article,
  about,
  contact,
  join,
}






state.js

// acts.generateState({ page: 'models-male' })
// acts.generateState({ page: 'models-female' })
// acts.generateState({ page: 'news' })
// acts.generateState({ page: 'article', articleId: 'd23df' })
// acts.generateState({ page: 'model-book', modelId: 'ids2d' })
// acts.generateState({ page: 'model-polaroids', modelId: 'ids2d' })
// acts.generateState({ page: 'model-pdf', modelId: 'ids2d' })
// acts.generateState({ page: 'about' })
// acts.generateState({ page: 'contact' })
// acts.generateState({ page: 'join' })
// acts.generateState({ page: 'main' })


state = {
  page: {
    type: '404'
  }
}

state.set404() {
  setPage({ type: '404' })
}


function pageAbout () {
  state.initEmpty()

  res.end(page(unit.pageAbout))
}


function pageModelsList (req, res) {
  state.initEmpty()
  const gender = req.params.gender
  const paramsOk = (
    gender === 'male' ||
    gender === 'female'
  )

  if (paramsOk) {
    const models = await db.getModels(gender)
    const modelIds = models.map(m => m.id)
    state.setPage('men')
    state.addModels(models)
    state.setModelsList(gender, modelIds)
  } else {
    state.set404()
  }

  res.end(page(unit.page))
}


// news
const articles = await db.getArticlePreviews()
state.initEmpty()
state.setArticles(articles)


// article
const article = await db.getArticle(articleId)
state.initEmpty()
state.setOpenArticle(article)


// model-book
// model-polaroids
const model = await db.getModel(modelId)
state.initEmpty()
state.addModels([ model ])
state.setOpenModel(modelId)






const s = stateRaw = {
  models[id]: {
    id: String
    name: String
    slug: String
    book: URL[]
    polaroids: URL[]
    instagram: URL
    params: {
      height: Number // cm
      chest: Number // cm
      waist: Number // cm
      hips: Number // cm
      shoe: Number // rus size
      hair: String
      eyes: String
    }
  }

  modelLists: {
    male: [ id, ... ]
    female: [ id, ... ]
  }
}

state.merge (newState) {
  setModelsList('male', newState.modelLists.male)
  setModelsList('female', newState.modelLists.female)
  addModels(Object.values(newState.models))
}


state = {
  models: {}
  modelLists: {
    male: [],
    female: []
  }
}



nav.dataToUrl()

/*
/
/men
/men/<modelId>
/men/<modelId>/polaroids
/women
/women/<modelId>
/news
/news/<articleId>
/about
/contact
/join
*/

page
  { type: 'main' }
  { type: 'models', gender: 'male' }
  { type: 'models', gender: 'female' }
  { type: 'model', modelId: String, section: 'book' }
  { type: 'model', modelId: String, section: 'polaroids' }
  { type: 'news' }
  { type: 'article', articleId: String }
  { type: 'about' }
  { type: 'contact' }
  { type: 'join' }


state.initEmpty()
state.setStatic(self.static)

const urlData = nav.urlToData(req.url)
const pageType = urlData.pageType

if (pageType === 'model') {
  const modelId = urlData.modelId
  const model = await db.getModel(modelId)

  state.addModels([ model ])
  state.setOpenModel(modelId)

  if (ajax) {
    res.json(state.raw())
  } else {
    res.end(buildPage(unit.pageMain))
  }
}


function buildPage (static) {
  return skin.page.render({
    js: static.js,
    css: static.css,
    title:
    body: skin.layout.render({
      content: buildContent()
    })
  })
}

function buildContent () {
  const urlData = state.getUrlData()
  unit.modelsList.build('male')
  unit.modelsList.build('female')
  unit.model.build(modelId, 'book')
  unit.model.build(modelId, 'polaroids')
  unit.news.build()
  unit.article.build(articleId)
  unit.about.build()
  unit.contact.build()
  unit.join.build()
}


unit.page.actualizeContent()

history

const timeline = []
const sequence = []
const timeline = []

const timeline = []
let secuence = null
let secuenceIndex = 0

generateUrl(page)
generatePage(url)

generateUrl(page) => url
parseUrl(url) => page


nav.go(url) {
  const page = nav.parseUrl(url)

  // Instant transit
  if (state.hasDataForPage(page)) {
    transit(page)
    return
  }

  if (
    page.type === 'models' && state.hasModelsList(page.gender) ||
    page.type === 'model' && state.hasModel(modelId) ||
    page.type === 'news' && state.hasArticlesList() ||
    page.type === 'article' && state.hasArticle(page.articleId) ||
    page.type === 'main' && state.hasArticlesList() ||
    page.type === 'about' ||
    page.type === 'contact' ||
    page.type === 'join'
  ) {
    transit(page)
    return
  }

  // Ajax transit
  ajax(url, newState => {
    curSecuence.scrollTop = getScrollTop()
    curSecuenceIndex += 1
    curSecuence = { page, scrollTop: 0 }
    timeline.push(curSecuence)
    state.merge(newState)
    transit(page)
  })
}

function transit (page) {
  state.setPage(page)
  unit.page.actualizeContent()
}


nav.back() {
  const timelineIndex = timeline.length - 1
  const timelineItem = timeline[timelineIndex]
  state.setUrlData(timelineItem.urlData)
  unit.page.actualizeContent()
}

nav.forward() {
  const timelineIndex = curTimelineIndex + 1
  const timelineItem = timeline[timelineIndex]
  state.setUrlData(timelineItem.urlData)
  unit.page.actualizeContent()
}

nav.goToUrl(url) {

}






nav.go('/men')
nav.go('/women')

  state.setUrlData({
    pageType: 'models',
    gender: 'female'
  })



nav.setUrl('/men')
ajaxGo('/men', newState => {
  state.merge(newState)
  state.setPage('men')
})


state.onPageChange(page => {
  ???
})











state = {
  raw() {}

  show: {
    get(id) {}
    getSeasonsCount(id) {}
    setFrameSubs(showId, season, episode, frame, subs) {}
  }
}

stateRaw.shows[showId].episodes[season][episode].subs[frame] = subs


stateRaw = {
  shows: {
    dirkgently: {
      id: 'dirkgently',
      type: 'series',
      episodes: {
        1: {
          1: {
            framesCount: 1000,
            excludes: [ 12, 13, 14, 100, 102, 104 ],
            subs: {
              90: 'sadsad',
              91: 'asdsad',
              92: 'sadasd',
              95: 'asdasd',
            }
          }
        }
        2: {

        }
        3: {

        }
        4: {

        }
        5: {

        }
      }
    }
    got: {
      id: 'got',
      seasons: [
        [
        ]
      ]
    }
  }
}
