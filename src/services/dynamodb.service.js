const AWS = require('aws-sdk');
const dotenv = require('dotenv');
dotenv.config();
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey =process.env.AWS_SECRET_ACCESS_KEY;
const region = process.env.AWS_REGION;

class DynamoDBService{
  constructor() {
    AWS.config.update({
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKey,
      region: region,
    });

    this.dynamoClient = new AWS.DynamoDB.DocumentClient();
  }

  async readDocuments(tableName) {
    let params = {
      TableName: tableName
    };
    let documents = await this.dynamoClient.scan(params).promise();
    return documents;
  }

  async readDocument(tableName, filter) {
    let params = {
      TableName: tableName,
      key:{
        filter
      }
    };
    return await this.dynamoClient.get(params).promise();
  }

  async createDocument(tableName, info){
    let params = {
      TableName: tableName,
      Item: info
    };
    return await this.dynamoClient.put(params).promise();
  }

  async deleteDocument(tableName, filter){
    let params = {
      TableName: tableName,
      Key: {
        filter
      }
    };
    return await this.dynamoClient.delete(params).promise();
  }

  async updateDocument(tableName, newInfo){
    let params = {
      TableName: tableName,
      Item: newInfo
    };
    return await this.dynamoClient.put(params).promise();
  }

}

module.exports = DynamoDBService;
