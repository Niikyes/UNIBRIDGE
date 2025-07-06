
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Estudiante = sequelize.define('Estudiante', {
  user_id: { type: DataTypes.UUID, primaryKey: true },
  cedula: { type: DataTypes.STRING, allowNull: false },
  fecha_nacimiento: { type: DataTypes.DATEONLY },
  telefono: { type: DataTypes.STRING },
  carrera_id: { type: DataTypes.UUID },
  facultad_id: { type: DataTypes.UUID },
  universidad_id: { type: DataTypes.UUID }
}, {
  tableName: 'estudiantes',
  timestamps: false
});

module.exports = Estudiante;
