const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  username: process.env.DATABASE_USERNAME || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'root',
  database: process.env.DATABASE_NAME || 'prueba',
  host: 'localhost',
  dialect: 'postgres',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to the database successfully!');
  })
  .catch(error => {
    console.error('Could not connect to the database', error);
  });

module.exports = sequelize;
