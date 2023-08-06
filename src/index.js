const createApp = require('./app');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT;

const app = createApp();

app.listen(PORT, () => {
  console.log(`API listening in: http://localhost:${PORT}`)
});
