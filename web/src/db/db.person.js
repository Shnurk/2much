const db = require('./db')
const Person = db._collections.Person

Object.assign(db, {
  person: {
    create: createPerson,
    update: updatePerson,
    delete: deletePerson,
    getById,
    getAll
  }
})

async function deletePerson (id) {
  await Person.remove({ _id: id })
}

async function getById (personId) {
  const person = await Person.findOne({ _id: personId })
  return person ? await wrapPerson(person) : null
}

async function getAll () {
  const persons = await Person.find().toArray()
  return Promise.all(persons.map(wrapPerson))
}

async function wrapPerson (person) {
  return {
    _id: person._id,
    name: person.name,
    slug: person.slug,
    gender: person.gender,
    instagram: person.instagram,
    params: person.params,
    cover: await db.photo.getById(person.cover),
    book: await db.photo.getByIds(person.book),
    polaroids: await db.photo.getByIds(person.polaroids)
  }
}

async function createPerson (data) {
  await Person.insert(data)
}

async function updatePerson (id, data) {
  await Person.update({ _id: id }, { $set: data })
}
