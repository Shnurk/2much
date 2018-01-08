const { MongoClient, ObjectID } = require('mongodb')

module.exports = connectMongo

async function connectMongo (mongoUrl) {
  const mongo = await MongoClient.connect(mongoUrl, { pkFactory })
  return mongo
}

function pkFactory () {}
pkFactory.createPk = generateId
pkFactory.prototype = new Object()

function generateId () {
  return ObjectID().toString()
}
