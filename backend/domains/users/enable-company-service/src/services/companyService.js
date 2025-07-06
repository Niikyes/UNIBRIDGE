const { Empresa } = require("../models");

const enableCompany = async (id) => {
  const empresa = await Empresa.findByPk(id);
  if (!empresa) {
    throw new Error("Empresa no encontrada.");
  }

  empresa.esta_aprobada = true;
  await empresa.save();

  return empresa;
};

module.exports = {
  enableCompany,
};
