// src/models/Role.js (Sequelize version)
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Role = sequelize.define('Role', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
  privileges: { type: DataTypes.JSON, defaultValue: [] } // Requires MySQL 5.7+ or can be TEXT if needed
});

module.exports = Role;