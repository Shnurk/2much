const db = requireSrc('/db')
const static = requireSrc('/static')
const nav = g.nav
const AdminView = g.unit.AdminView

const AdminCtrl = module.exports = {
  manage (app) {
    app.get('/admin', redirectToPersons)
    app.get('/admin/models', personList)
    app.use('/admin/models/new', personCreate)
    app.post('/admin/models/:personId/delete', personDelete)
    app.use('/admin/models/:personId', personEdit)

    app.get('/admin/articles', articleList)
    app.use('/admin/articles/new', articleCreate)
    app.post('/admin/articles/:articleId/delete', articleDelete)
    app.use('/admin/articles/:articleId', articleEdit)

    app.get('/admin/api/execute', execute)
  }
}

const js = static.js('common', 'admin')
const css = static.css('common', 'admin')

async function execute (req, res) {
  const translit = require('cyrillic-to-translit-js')().transform
  const articles = await db.article.getAll()
  await Promise.all(
    articles.map(async a => {
      await db._collections.Article.update({ _id: a._id }, {
        $set: {
          slug: translit(a.titlePretty).replace(/ /g, '-')
        }
      })
    })
  )
  res.end('ok')
}

function redirectToPersons (req, res) {
  res.redirect('/admin/models')
}

async function personDelete (req, res) {
  const personId = req.params.personId
  await db.person.delete(personId)
  res.redirect('/admin/models')
}

async function personList (req, res) {
  const persons = await db.person.getAll()
  res.end(AdminView.build({ type: 'list', css, js, persons }))
}

async function personCreate (req, res) {
  if (req.method === 'POST') {
    const data = JSON.parse(req.body.json)
    await db.person.create(data)
    res.json({ ok: 1 })
  }
  res.end(AdminView.build({ type: 'create', what: 'person', css, js }))
}

async function personEdit (req, res) {
  const personId = req.params.personId

  if (req.method === 'POST') {
    const data = JSON.parse(req.body.json)
    await db.person.update(personId, data)
    res.json({ ok: 1 })
  }

  const person = await db.person.getById(personId)

  if (!person) {
    res.status(404)
    res.end('404')
  }

  res.end(AdminView.build({ type: 'edit', css, js, person }))
}









async function articleDelete (req, res) {
  const articleId = req.params.articleId
  await db.article.delete(articleId)
  res.redirect('/admin/articles')
}

async function articleList (req, res) {
  const articles = await db.article.getAll()
  res.end(AdminView.build({ type: 'list', css, js, articles }))
}

async function articleCreate (req, res) {
  if (req.method === 'POST') {
    const data = JSON.parse(req.body.json)
    await db.article.create(data)
    res.json({ ok: 1 })
  }
  const allModels = await db.person.getAll()
  res.end(AdminView.build({ type: 'create', what: 'articles', css, js, allModels }))
}

async function articleEdit (req, res) {
  const articleId = req.params.articleId

  if (req.method === 'POST') {
    const data = JSON.parse(req.body.json)
    await db.article.update(articleId, data)
    res.json({ ok: 1 })
  }

  const article = await db.article.getById(articleId)
  const allModels = await db.person.getAll()

  if (!article) {
    res.status(404)
    res.end('404')
  }

  res.end(AdminView.build({ type: 'edit', css, js, article, allModels }))
}
