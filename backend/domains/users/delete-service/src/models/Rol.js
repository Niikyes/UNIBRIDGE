
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Rol = sequelize.define('Rol', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING(50), unique: true, allowNull: false }
}, {
  tableName: 'roles',
  timestamps: false
});

module.exports = Rol;
