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
  }
}

const js = [].concat(static.getCommonJS(), static.getAdminJS())
const css = [].concat(static.getCommonCSS(), static.getAdminCSS())

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
  res.end(AdminView.build({ type: 'create', css, js }))
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
