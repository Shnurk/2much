const { MongoClient, ObjectID } = require('mongodb')

const db = module.exports = {
  connect,

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
}

function pkFactory () {}
pkFactory.createPk = generateId
pkFactory.prototype = new Object()

function generateId () {
  return ObjectID().toString()
}
