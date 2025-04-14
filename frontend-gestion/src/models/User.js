// src/models/User.js (Sequelize version)
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Role = require('./Role');

const User = sequelize.define('User', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  accountNo: { type: DataTypes.INTEGER, unique: true },
  name: { type: DataTypes.STRING, allowNull: false },
  surname: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  birthdate: { type: DataTypes.DATE },
  resetCode: { type: DataTypes.STRING },
  resetCodeExpires: { type: DataTypes.DATE },
  isVerified: { type: DataTypes.BOOLEAN, defaultValue: false },
  // Instead of storing a role as string, use a foreign key
  // roleId will reference Role.id
  approvalStatus: {
    type: DataTypes.ENUM('unverified', 'pending', 'approved', 'rejected'),
    defaultValue: 'unverified'
  },
  profilePicture: { type: DataTypes.STRING, defaultValue: '' },
  cloudinaryPublicId: { type: DataTypes.STRING, defaultValue: '' },
  expired: { type: DataTypes.BOOLEAN, defaultValue: false }
});

// Define association
User.belongsTo(Role, { foreignKey: 'roleId', as: 'role' });

module.exports = User;


