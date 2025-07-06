const { Estudiante, Empresa, Coordinador, Universidad, Facultad, Carrera, User } = require("../models");

const listStudents = async () => {
  return await Estudiante.findAll({
    include: [
      { model: Universidad, attributes: ["nombre"] },
      { model: Facultad, attributes: ["nombre"] },
      { model: Carrera, attributes: ["nombre"] },
      { model: User, attributes: ["nickname"] }
    ]
  });
};

const listCompanies = async () => {
  return await Empresa.findAll({
    include: [
      { model: User, attributes: ["nickname"] }
    ]
  });
};

const listCoordinators = async () => {
  return await Coordinador.findAll({
    include: [
      { model: Universidad, attributes: ["nombre"] },
      { model: User, attributes: ["nickname"] }
    ]
  });
};

const listPendingCompanies = async () => {
  return await Empresa.findAll({
    where: { esta_aprobada: false },
    include: [
      { model: User, attributes: ["nickname", "email"] }
    ]
  });
};

module.exports = {
  listStudents,
  listCompanies,
  listCoordinators,
  listPendingCompanies
};
