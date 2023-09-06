//const MongoService = require('./mongodb.service');
const DynamoService = require('./dynamodb.service');
const dotenv = require('dotenv');
dotenv.config();

class VeterinariansService {
  constructor(){
    this.collection = process.env.COLLECTION_VETERINARIANS;
    this.dynamoDB = new DynamoService();
  }

  readVeterinarians(){
    return this.dynamoDB.readDocuments(this.collection);
  }

  readVeterinarian(id){
    return this.dynamoDB.readDocument(this.collection, id);
  }

  createVeterinarian(info){
    return this.dynamoDB.createDocument(this.collection, info);
  }

  updateVeterinarian(id, newInfo){
    return this.dynamoDB.updateDocument(this.collection, newInfo);
  }

  deleteVeterinarian(id){
    return this.dynamoDB.deleteDocument(this.collection, id);
  }
}

module.exports = VeterinariansService;
