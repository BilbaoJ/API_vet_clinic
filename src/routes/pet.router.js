const express = require('express');
const router = express.Router();
const petsController = require('../controllers/pets.controller')

router.get('/', petsController.readPets);

router.get('/:id', petsController.readPet);

router.post('/', petsController.createPet);

router.put('/:id', petsController.updatePet);

router.delete('/:id', petsController.deletePet);

module.exports = router;
