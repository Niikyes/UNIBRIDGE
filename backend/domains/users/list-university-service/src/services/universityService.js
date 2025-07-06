const { Universidad, Facultad, Carrera } = require("../models/index");

const listUniversities = async () => {
  return await Universidad.findAll();
};

const listFaculties = async () => {
  return await Facultad.findAll({
    include: [
      {
        model: Universidad,
        attributes: ["nombre"]
      }
    ]
  });
};

const listCareers = async () => {
  return await Carrera.findAll({
    include: [
      {
        model: Facultad,
        attributes: ["nombre"],
        include: [
          {
            model: Universidad,
            attributes: ["nombre"]
          }
        ]
      }
    ]
  });
};

module.exports = {
  listUniversities,
  listFaculties,
  listCareers
};
