const PetsService = require('../services/pets.service');
const service = new PetsService();

const readPets = async (req, res) => {
  let response = {};
  try {
    let result = await service.readPets();
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
    let result = await service.mongoDB(id);
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
    let result = await service.createPet(info);
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
    let result = await service.deletePet(id);
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
    let result = await service.updatePet(id, info);
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
