const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Veterinarian')
});

router.get('/:id', (req, res) => {
  res.send('Veterinarian')
});

router.post('/', (req, res) => {
  res.send('Veterinarian')
});

router.put('/:id', (req, res) => {
  res.send('Veterinarian')
});

router.delete('/:id', (req, res) => {
  res.send('Veterinarian')
});

module.exports = router;
