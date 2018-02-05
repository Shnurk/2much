const { MongoClient, ObjectID } = require('mongodb')

const db = module.exports = {
  connect,

  setModelsOrder,
  createApplication,
  getAllApplications,

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
  await Applications.insert(application)
}

async function getAllApplications () {
  var Applications = db._collections.Applications
  var applications = await Applications.find().toArray()
  return applications
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
