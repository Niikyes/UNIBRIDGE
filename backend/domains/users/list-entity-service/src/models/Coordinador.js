const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Coordinador = sequelize.define("Coordinador", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.UUID,
  },
  universidad_id: {
    type: DataTypes.UUID,
  }
}, {
  tableName: "coordinadores",
  timestamps: false,
});

module.exports = Coordinador;
