

// db.js
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('korpor', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
