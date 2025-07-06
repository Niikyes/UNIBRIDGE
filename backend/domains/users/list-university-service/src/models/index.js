const { sequelize } = require("../config/database");
const Universidad = require("./Universidad");
const Facultad = require("./Facultad");
const Carrera = require("./Carrera");

// Facultad
Facultad.belongsTo(Universidad, { foreignKey: "universidad_id" });

// Carrera
Carrera.belongsTo(Facultad, { foreignKey: "facultad_id" });

module.exports = {
  sequelize,
  Universidad,
  Facultad,
  Carrera
};
