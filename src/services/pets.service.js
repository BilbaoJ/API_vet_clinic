const MongoService = require('./mongodb.service');
const dotenv = require('dotenv');
dotenv.config();

class PetsService {
  constructor(){
    this.collection = process.env.COLLECTION_PETS;
    this.mongoDB = new MongoService();
  }

  readPets(){
    return this.mongoDB.readDocuments(this.collection);
  }

  readPet(id){
    return this.mongoDB.readDocument(this.collection, id);
  }

  createPet(info){
    return this.mongoDB.createDocument(this.collection, info);
  }

  updatePet(id, newInfo){
    return this.mongoDB.updateDocument(this.collection, id, newInfo);
  }

  deletePet(id){
    return this.mongoDB.deleteDocument(this.collection, id);
  }
}

module.exports = PetsService;
