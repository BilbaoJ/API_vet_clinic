const express = require('express');
const router = express.Router();
const medicController = require('../controllers/medic.controller')

router.get('/', medicController.readMedics);

router.get('/:id', medicController.readMedic);

router.post('/', medicController.createMedic);

router.put('/', medicController.updateMedic);

router.delete('/:id', medicController.deleteMedic);

module.exports = router;
