const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patient.controller')

router.get('/', patientController.readPatients);

router.get('/:id', patientController.readPatient);

router.post('/', patientController.createPatient);

router.put('/', patientController.updatePatient);

router.delete('/:id', patientController.deletePatient);

module.exports = router;
