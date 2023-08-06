const MongoService = require('./mongodb.service');
const dotenv = require('dotenv');
dotenv.config();

class VeterinaransService {
  constructor(){
    this.collection = process.env.COLLECTION_VETERINARIANS;
    this.mongoDB = new MongoService();
  }

  readVeterinarians(){
    return this.mongoDB.readDocuments(this.collection);
  }

  readVeterinarian(id){
    return this.mongoDB.readDocument(this.collection, id);
  }

  createVeterinarian(info){
    return this.mongoDB.createDocument(this.collection, info);
  }

  updateVeterinarian(id, newInfo){
    return this.mongoDB.updateDocument(this.collection, id, newInfo);
  }

  deleteVeterinarian(id){
    return this.mongoDB.deleteDocument(this.collection, id);
  }
}

module.exports = VeterinaransService;
