const { MongoClient } = require("mongodb");
const uri = process.env.URI_MONGODB;
const client = new MongoClient(uri);

const conectDB = async () => {
  await client.connect();
  let DB = client.db(process.env.DB_MONGODB);
  return DB;
}

const readDocuments = async (collectionName) => {
  let db = await conectDB();
  let collection = db.collection(collectionName);
  return collection.find().toArray();
}

const readDocument = async (collectionName, filter) => {
  let db = await conectDB();
  let collection = db.collection(collectionName);
  return collection.findOne(filter);
}

const createDocument = async (collectionName, info)=>{
  let db = await conectDB();
  let collection = db.collection(collectionName);
  return await collection.insertOne(info);
}

const deleteDocument = async (collectionName, filter)=>{
  let db = await conectDB();
  let collection = db.collection(collectionName);
  return await collection.deleteOne(filter);
}

const updateDocument = async (collectionName, filter, newDocument)=>{
  let db = await conectDB();
  let coleccion = db.collection(collectionName);
  return await coleccion.replaceOne(filter, newDocument);
}

module.exports = {
  readDocuments,
  readDocument,
  createDocument,
  deleteDocument,
  updateDocument};
