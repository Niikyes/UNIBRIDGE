const { sequelize } = require("../config/database");
const Estudiante = require("./Estudiante");
const Empresa = require("./Empresa");
const Coordinador = require("./Coordinador");
const Universidad = require("./Universidad");
const Facultad = require("./Facultad");
const Carrera = require("./Carrera");
const User = require("./User");

// Relaciones para Estudiante
Estudiante.belongsTo(Universidad, { foreignKey: "universidad_id" });
Estudiante.belongsTo(Facultad, { foreignKey: "facultad_id" });
Estudiante.belongsTo(Carrera, { foreignKey: "carrera_id" });
Estudiante.belongsTo(User, { foreignKey: "user_id" });

// Empresa
Empresa.belongsTo(User, { foreignKey: "user_id" });

// Coordinador
Coordinador.belongsTo(Universidad, { foreignKey: "universidad_id" });
Coordinador.belongsTo(User, { foreignKey: "user_id" });

// Facultad
Facultad.belongsTo(Universidad, { foreignKey: "universidad_id" });

// Carrera
Carrera.belongsTo(Facultad, { foreignKey: "facultad_id" });

module.exports = {
  sequelize,
  Estudiante,
  Empresa,
  Coordinador,
  Universidad,
  Facultad,
  Carrera,
  User
};
