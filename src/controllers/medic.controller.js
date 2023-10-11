
const readMedics = async (req, res) => {
  let response = {};
  try {
    let result = await (await fetch(process.env.URL_BASE_YOIMAR_TEAM + '/medic', {method:'GET'})).json();
    response.ok = true;
    response.message = "Registries read successfully";
    response.info = result.data;
    res.send(response);
  } catch (error) {
    response.ok = false;
    response.message = "An error occurred reading the registries";
    response.info = error.message;
    res.status(500).send(response);
  }
};

const readMedic = async (req, res) => {
  let response = {};
  try {
    let { id } = req.params;
    let result = await(await fetch(process.env.URL_BASE_YOIMAR_TEAM + '/medic/' + id)).json();
    response.ok = true;
    response.message = "Registry read successfully";
    response.info = result.data;
    res.send(response);
  } catch (error) {
    response.ok = false;
    response.message = "An error occurred reading the registry";
    response.info = error.message;
    res.status(500).send(response);
  }
};

const createMedic = async (req, res) => {
  let response = {};
  try {
    let info = JSON.stringify(req.body);
    let result = await(await fetch(process.env.URL_BASE_YOIMAR_TEAM + '/medic/create', {method:'POST', body:info, headers:{"Content-Type": "application/json"}})).json();
    response.ok = true;
    response.message = "Registry created successfully";
    response.info = result.data;
    res.send(response);
  } catch (error) {
    response.ok = false;
    response.message = "An error occurred creating the registry";
    response.info = error.message;
    res.status(500).send(response);
  }
};

const deleteMedic = async (req, res) => {
  let response = {};
  try {
    let { id } = req.params;
    let result = await (await fetch(process.env.URL_BASE_YOIMAR_TEAM + '/medic/delete/' + id, {method:'DELETE'})).json();
    response.ok = true;
    response.message = "Registry deleted successfully";
    response.info = result.data;
    res.send(response);
  } catch (error) {
    response.ok = false;
    response.message = "An error occurred deleting the registry";
    response.info = error.message;
    res.status(500).send(response);
  }
};

const updateMedic = async (req, res) => {
  let response = {};
  try {
    let info = JSON.stringify(req.body);
    let result = await (await fetch(process.env.URL_BASE_YOIMAR_TEAM + '/medic/update/', {method:'PUT', body:info, headers:{"Content-Type": "application/json"}})).json();
    response.ok = true;
    response.message = "Registry updated successfully";
    response.info = result.data;
    res.send(response);
  } catch (error) {
    response.ok = false;
    response.message = "An error occurred updating the registry";
    response.info = error.message;
    res.status(500).send(response);
  }
};

module.exports = {
  readMedics,
  readMedic,
  createMedic,
  deleteMedic,
  updateMedic};
