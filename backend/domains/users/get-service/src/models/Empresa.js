
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Empresa = sequelize.define('Empresa', {
  user_id: { type: DataTypes.UUID, primaryKey: true },
  nombre_empresa: { type: DataTypes.STRING },
  telefono: { type: DataTypes.STRING },
  direccion: { type: DataTypes.STRING },
  ruc: { type: DataTypes.STRING, unique: true }
}, {
  tableName: 'empresas',
  timestamps: false
});

module.exports = Empresa;
