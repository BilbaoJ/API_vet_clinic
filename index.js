const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Holaa')
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Holaa, soy una nueva ruta')
});

app.listen(port, () => {
  console.log('Mi puerto ' + port)
});
