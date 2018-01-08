const translit = require('cyrillic-to-translit-js')().transform
const db = require('./db')
const Article = db._collections.Article

Object.assign(db, {
  article: {
    create: createArticle,
    update: updateArticle,
    delete: deleteArticle,
    getById,
    getBySlug,
    getAll
  }
})

async function deleteArticle (id) {
  await Article.remove({ _id: id })
}

async function getById (articleId) {
  const article = await Article.findOne({ _id: articleId })
  return article ? await wrapArticle(article) : null
}

async function getBySlug (slug) {
  const article = await Article.findOne({ slug })
  return article ? await wrapArticle(article) : null
}

async function getAll () {
  const articles = await Article.find().toArray()
  return Promise.all(articles.map(wrapArticle))
}

async function wrapArticle (article) {
  const models = await db.person.getByIds(article.models)
  const title = article.title
  let titlePretty = title
  models.forEach((model, i) => {
    titlePretty = titlePretty.replace(`{model${i+1}}`, model.name)
  })

  return {
    _id: article._id,
    url: `/news/${article.slug}`,
    title,
    titlePretty,
    models,
    photos: await db.photo.getByIds(article.photos),
    date: article.date,
  }
}

async function createArticle (data) {
  const models = await db.person.getByIds(data.models)
  const title = data.title
  let titlePretty = title
  models.forEach((model, i) => {
    titlePretty = titlePretty.replace(`{model${i+1}}`, model.name)
  })

  data.slug = translit(titlePretty).replace(/ /g, '-')
  await Article.insert(data)
}

async function updateArticle (id, data) {
  await Article.update({ _id: id }, { $set: data })
}
