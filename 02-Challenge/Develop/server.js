const express = require('express');
const routes = require('./routes');
require('dotenv').config();
const { Sequelize, DataTypes } = require("sequelize");
require('./models');


const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {host: 'localhost', dialect: 'mysql'}
);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  sequelize.authenticate().then(() => {
    console.log('connection established to database');
  }).catch((error) => {
    console.error(`failed to establish connection to database: ${error}`);
  });

  console.log(`App listening on port ${PORT}!`);
});

