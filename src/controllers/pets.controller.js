const {readDocument,
  readDocuments,
  createDocument,
  deleteDocument,
  updateDocument
} = require('../services/mongodb.service');
const dotenv = require('dotenv');
dotenv.config();

const readPets = async (req, res) => {
  let response = {};
  try {
    let result = await readDocuments(process.env.COLLECTION_PETS);
    response.ok = true;
    response.message = "Registries read successfully";
    response.info = result;
    res.send(response);
  } catch (error) {
    response.ok = false;
    response.message = "An error occurred reading the registries";
    response.info = error.message;
    res.status(500).send(response);
  }
};

const readPet = async (req, res) => {
  let response = {};
  try {
    let { id } = req.params;
    let result = await readDocument(process.env.COLLECTION_PETS, id);
    response.ok = true;
    response.message = "Registry read successfully";
    response.info = result;
    res.send(response);
  } catch (error) {
    response.ok = false;
    response.message = "An error occurred reading the registry";
    response.info = error.message;
    res.status(500).send(response);
  }
};

const createPet = async (req, res) => {
  let response = {};
  try {
    let info = req.body;
    let result = await createDocument(process.env.COLLECTION_PETS, info);
    response.ok = true;
    response.message = "Registry created successfully";
    response.info = result;
    res.send(response);
  } catch (error) {
    response.ok = false;
    response.message = "An error occurred creating the registry";
    response.info = error.message;
    res.status(500).send(response);
  }
};

const deletePet = async (req, res) => {
  let response = {};
  try {
    let { id } = req.params;
    let result = await deleteDocument(process.env.COLLECTION_PETS, id);
    response.ok = true;
    response.message = "Registry deleted successfully";
    response.info = result;
    res.send(response);
  } catch (error) {
    response.ok = false;
    response.message = "An error occurred deleting the registry";
    response.info = error.message;
    res.status(500).send(response);
  }
};

const updatePet = async (req, res) => {
  let response = {};
  try {
    let { id } = req.params;
    let info = req.body;
    let result = await updateDocument(process.env.COLLECTION_PETS, id, info);
    response.ok = true;
    response.message = "Registry updated successfully";
    response.info = result;
    res.send(response);
  } catch (error) {
    response.ok = false;
    response.message = "An error occurred updating the registry";
    response.info = error.message;
    res.status(500).send(response);
  }
};

module.exports = {
  readPets,
  readPet,
  createPet,
  deletePet,
  updatePet};
