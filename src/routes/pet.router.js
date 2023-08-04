const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Pets')
});

router.get('/:id', (req, res) => {
  res.send('Pets')
});

router.post('/', (req, res) => {
  res.send('Pets')
});

router.put('/:id', (req, res) => {
  res.send('Pets')
});

router.delete('/:id', (req, res) => {
  res.send('Pets')
});

module.exports = router;
