const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Facultad = sequelize.define("Facultad", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  universidad_id: {
    type: DataTypes.UUID,
  }
}, {
  tableName: "facultades",
  timestamps: false,
});

module.exports = Facultad;
