const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Universidad = sequelize.define("Universidad", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  ruc: {
    type: DataTypes.STRING,
  },
  direccion: {
    type: DataTypes.TEXT,
  },
  created_at: {
    type: DataTypes.DATE,
  }
}, {
  tableName: "universidades",
  timestamps: false,
});

module.exports = Universidad;
