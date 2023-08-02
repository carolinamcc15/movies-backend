require('dotenv').config();
const app = require('./app');

const port = process.env.PORT || 3010;

app.listen(port, () => {
  console.log(`API iniciada en http://localhost:${port}`);
});
