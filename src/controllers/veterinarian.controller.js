const VeterinariansService = require('../services/veterinarians.service');
const service = new VeterinariansService();

const readVeterinarians = async (req, res) => {
  let response = {};
  try {
    let result = await service.readVeterinarians();
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

const readVeterinarian = async (req, res) => {
  let response = {};
  try {
    let { id } = req.params;
    let result = await service.readVeterinarian(id);
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

const createVeterinarian = async (req, res) => {
  let response = {};
  try {
    let info = req.body;
    let result = await service.createVeterinarian(info);
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

const deleteVeterinarian = async (req, res) => {
  let response = {};
  try {
    let { id } = req.params;
    let result = await service.deleteVeterinarian(id);
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

const updateVeterinarian = async (req, res) => {
  let response = {};
  try {
    let { id } = req.params;
    let info = req.body;
    let result = await service.updateVeterinarian(id, info);
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
  readVeterinarians,
  readVeterinarian,
  createVeterinarian,
  deleteVeterinarian,
  updateVeterinarian};
