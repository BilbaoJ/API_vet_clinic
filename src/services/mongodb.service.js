const { MongoClient, ObjectId } = require("mongodb");
const dotenv = require('dotenv');
dotenv.config();
const uri = process.env.URI_MONGODB;
const dbName = process.env.DB_MONGODB;

class MongoService {
  constructor(){
    this.client = new MongoClient(uri);
    this.dbName = dbName;
  }

  async connectDB() {
    await this.client.connect();
    MongoService.connection = this.client.db(this.dbName);
    return MongoService.connection;
  }

  async readDocuments(collectionName) {
    let db = await this.connectDB();
    let collection = db.collection(collectionName);
    return collection.find().toArray();
  }

  async readDocument(collectionName, filter) {
    let db = await this.connectDB();
    let collection = db.collection(collectionName);
    filter = new ObjectId(filter);
    return collection.findOne(filter);
  }

  async createDocument(collectionName, info){
    let db = await this.connectDB();
    let collection = db.collection(collectionName);
    return await collection.insertOne(info);
  }

  async deleteDocument(collectionName, filter){
    let db = await this.connectDB();
    let collection = db.collection(collectionName);
    filter = { _id: new ObjectId(filter) };
    return await collection.deleteOne(filter);
  }

  async updateDocument(collectionName, filter, newDocument){
    let db = await this.connectDB();
    let coleccion = db.collection(collectionName);
    filter = { _id: new ObjectId(filter) };
    return await coleccion.replaceOne(filter, newDocument);
  }
}

module.exports = MongoService;



