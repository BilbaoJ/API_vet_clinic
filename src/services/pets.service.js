//const MongoService = require('./mongodb.service');
const DynamoService = require('./dynamodb.service');
const dotenv = require('dotenv');
dotenv.config();

class PetsService {
  constructor(){
    this.collection = process.env.COLLECTION_PETS;
    this.dynamoDB = new DynamoService();
  }

  readPets(){
    return this.dynamoDB.readDocuments(this.collection);
  }

  readPet(id){
    return this.dynamoDB.readDocument(this.collection, id);
  }

  createPet(info){
    return this.dynamoDB.createDocument(this.collection, info);
  }

  updatePet(id, newInfo){
    return this.dynamoDB.updateDocument(this.collection, newInfo);
  }

  deletePet(id){
    return this.dynamoDB.deleteDocument(this.collection, id);
  }
}

module.exports = PetsService;
