/* global nav */
/* global unit */
const db = requireSrc('/db')
const static = requireSrc('/static')

const MainCtrl = module.exports = {
  manage (app) {
    app.get('/', main)
    app.get('/news', news)
    app.get('/news/:slug', article)
    app.get('/models', models)
    app.get('/models/:slug', model)
    app.get('/models/:slug/polaroids', modelPolaroids)
    app.get('/about', about)
    app.get('/contact', contact)
    app.get('/join', join)
  }
}


const js = static.js('common')
const css = static.css('common')

async function main (req, res) {
  const articles = await db.article.getAll()
  const lastArticles = articles.slice(0, 4)
  const page = unit.page.build({ js, css, type: 'main', articles: lastArticles })
  res.end(page)
}

async function news (req, res) {
  const articles = await db.article.getAll()
  const page = unit.page.build({ js, css, type: 'news', articles })
  res.end(page)
}

async function article (req, res) {
  const slug = req.params.slug
  const article = await db.article.getBySlug(slug)

  if (article) {
    const page = unit.page.build({ js, css, type: 'article', article })
    res.end(page)
  }
}

async function models (req, res) {
  const persons = await db.person.getAll()
  const page = unit.page.build({ js, css, type: 'models', persons })
  res.end(page)
}

async function model (req, res) {
  await modelView(req, res, false)
}

async function modelView (req, res, isPolaroids) {
  const slug = req.params.slug
  const person = await db.person.getBySlug(slug)

  if (person) {
    const type = isPolaroids ? 'polaroids' : 'model'
    const page = unit.page.build({ js, css, type, person })
    res.end(page)
  }
}

async function modelPolaroids (req, res) {
  await modelView(req, res, true)
}

function about (req, res) {
  const page = unit.page.build({ js, css, type: 'about' })
  res.end(page)
}

function contact (req, res) {
  const page = unit.page.build({ js, css, type: 'contact' })
  res.end(page)
}

function join (req, res) {
  const page = unit.page.build({ js, css, type: 'join' })
  res.end(page)
}






// const url = req.url
// const page = nav.parseUrl(url)

// state.initEmpty()
// state.setPage(page)

// switch (page.type) {
//   case 'main':
//     // gather data for main page
//     break

//   case 'news':
//     const articles = await db.getArticlePreviews()
//     state.setArticles(articles)
//     break

//   case 'article':
//     const article = await db.getArticle(articleId)
//     state.addArticle(article)
//     break

//   case 'modelsList':
//     const gender = page.gender
//     // const models = await db.getModels(gender)
//     // const modelIds = models.map(m => m.id)
//     // state.addModels(models)
//     // state.setModelsList(gender, modelIds)
//     break

//   case 'model':
//     const model = await db.getModel(modelId)
//     state.addModel(model)
//     break
// }
