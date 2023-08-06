const express = require('express');
const routerApi = require('./routes/index')

const createApp = () => {
  const app = express();
  app.use(express.json());
  app.get('/', (req, res) => {
    res.send('Holaa')
  });
  routerApi(app);
  return app;
};

module.exports = createApp;






