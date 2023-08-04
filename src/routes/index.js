const petRouter = require('./pet.router');
const veterinarianRouter = require('./veterinarian.router');

function routerApi(app) {
  const vs = "/api/v1"
  app.use(vs + '/pets', petRouter);
  app.use(vs + '/veterinarians', veterinarianRouter);
}

module.exports = routerApi;
