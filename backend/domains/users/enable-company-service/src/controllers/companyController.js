const { enableCompany } = require("../services/companyService");

const enableCompanyController = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await enableCompany(id);
    res.status(200).json({ message: "Empresa habilitada correctamente.", empresa: updated });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  enableCompanyController,
};
