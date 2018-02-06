const { MongoClient, ObjectID } = require('mongodb')

const db = module.exports = {
  connect,

  setModelsOrder,
  createApplication,
  getAllApplications,
  getApplication,

  _collections: {
    Photo: null,
    Person: null,
    Article: null,
    Applications: null
  }
}

async function connect (mongoUrl) {
  const mongo = await MongoClient.connect(mongoUrl, { pkFactory })
  db._collections.Photo = mongo.collection('photo')
  db._collections.Person = mongo.collection('person')
  db._collections.Article = mongo.collection('article')
  db._collections.Applications = mongo.collection('application')
  require('./db.photo')
  require('./db.person')
  require('./db.article')
}

function pkFactory () {}
pkFactory.createPk = generateId
pkFactory.prototype = new Object()

function generateId () {
  return ObjectID().toString()
}

async function createApplication (application) {
  var Applications = db._collections.Applications
  var result = await Applications.insert(application)
  return result.ops[0]._id
}

async function getAllApplications () {
  var Applications = db._collections.Applications
  var applications = await Applications.find().toArray()
  applications = await Promise.all(
    applications.map(async a => {
      return {
        ...a,
        photos: await db.photo.getByIds(a.photos || []),
      }
    })
  )

  return applications
}

async function getApplication (id) {
  var Applications = db._collections.Applications
  var applications = await Applications.find({ _id: id }).toArray()
  applications = await Promise.all(
    applications.map(async a => {
      return {
        ...a,
        photos: await db.photo.getByIds(a.photos || []),
      }
    })
  )

  return applications[0]
}

async function setModelsOrder (modelIds) {
  const Models = db._collections.Person
  return Promise.all(modelIds.map((modelId, i) => {
    return Models.update(
      { _id: modelId },
      { $set: { order: i } }
    )
  }))
}
