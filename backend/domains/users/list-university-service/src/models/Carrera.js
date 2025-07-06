const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Carrera = sequelize.define("Carrera", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  facultad_id: {
    type: DataTypes.UUID,
  }
}, {
  tableName: "carreras",
  timestamps: false,
});

module.exports = Carrera;
