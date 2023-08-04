const express = require('express');
const router = express.Router();
const veterinariansController = require('../controllers/veterinarian.controller')

router.get('/', veterinariansController.readVeterinarians);

router.get('/:id', veterinariansController.readVeterinarian);

router.post('/', veterinariansController.createVeterinarian);

router.put('/:id', veterinariansController.updateVeterinarian);

router.delete('/:id', veterinariansController.deleteVeterinarian);

module.exports = router;
