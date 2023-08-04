const express = require('express');
const dotenv = require('dotenv');
const routerApi = require('./routes/index')
const app = express();
dotenv.config();
const PORT = process.env.PORT;

routerApi(app);

app.get('/', (req, res) => {
  res.send('Holaa')
});

app.listen(PORT, () => {
  console.log(`API listening in: http://localhost:${PORT}`)
});
