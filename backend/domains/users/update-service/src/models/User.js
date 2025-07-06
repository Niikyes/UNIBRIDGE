
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const User = sequelize.define('User', {
  id: { type: DataTypes.UUID, primaryKey: true },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password_hash: { type: DataTypes.TEXT, allowNull: false },
  nickname: { type: DataTypes.STRING(100), allowNull: false },
  role_id: { type: DataTypes.INTEGER },
  is_verified: { type: DataTypes.BOOLEAN, defaultValue: true },
  verification_code: { type: DataTypes.STRING(10) },
  reset_code: { type: DataTypes.STRING(10) }
}, {
  tableName: 'users',
  timestamps: false
});

// Relaciones
const Estudiante = require('./Estudiante');
const Empresa = require('./Empresa');
const Role = require('./Role');

User.hasOne(Estudiante, { foreignKey: 'user_id' });
User.hasOne(Empresa, { foreignKey: 'user_id' });
User.belongsTo(Role, { foreignKey: 'role_id' });

module.exports = User;
