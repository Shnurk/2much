/* global nav */
/* global unit */
const db = requireSrc('/db')
const static = requireSrc('/static')


const MainCtrl = module.exports = {
  manage (app) {
    app.get('/women', main)
    app.get('/men', main)
  }
}


const js = static.getCommonJS()
const css = static.getCommonCSS()


async function main (req, res) {
  const persons = await db.person.getAll()
  const page = unit.page.build({ js, css, persons })
  res.end(page)

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
}
