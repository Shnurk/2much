const { MongoClient, ObjectID } = require('mongodb')

const db = module.exports = {
  connect,

  setModelsOrder,

  _collections: {
    Photo: null,
    Person: null,
    Article: null
  }
}

async function connect (mongoUrl) {
  const mongo = await MongoClient.connect(mongoUrl, { pkFactory })
  db._collections.Photo = mongo.collection('photo')
  db._collections.Person = mongo.collection('person')
  db._collections.Article = mongo.collection('article')
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

async function setModelsOrder (modelIds) {
  const Models = db._collections.Person
  return Promise.all(modelIds.map((modelId, i) => {
    return Models.update(
      { _id: modelId },
      { $set: { order: i } }
    )
  }))
}
