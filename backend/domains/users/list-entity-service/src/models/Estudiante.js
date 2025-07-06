const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Estudiante = sequelize.define("Estudiante", {
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
  },
  facultad_id: {
    type: DataTypes.UUID,
  },
  carrera_id: {
    type: DataTypes.UUID,
  },
  cedula: {
    type: DataTypes.STRING,
  },
  telefono: {
    type: DataTypes.STRING,
  },
  fecha_nacimiento: {
    type: DataTypes.DATE,
  }
}, {
  tableName: "estudiantes",
  timestamps: false,
});

module.exports = Estudiante;
