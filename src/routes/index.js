const petRouter = require('./pet.router');
const veterinarianRouter = require('./veterinarian.router');
const patientRouter = require('./patient.router');
const medicRouter = require('./medic.router');

function routerApi(app) {
  const vs = "/api/v1"
  app.use(vs + '/pets', petRouter);
  app.use(vs + '/veterinarians', veterinarianRouter);
  app.use(vs + '/patients', patientRouter);
  app.use(vs + '/medics', medicRouter);
}

module.exports = routerApi;
