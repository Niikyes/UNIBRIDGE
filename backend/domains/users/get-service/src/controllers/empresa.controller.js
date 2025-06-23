const { sequelize } = require('../config/db');

const getEmpresaById = async (req, res) => {
  const { id } = req.params;
  try {
    const [results] = await sequelize.query(
      'SELECT * FROM empresas WHERE id = :id',
      { replacements: { id } }
    );
    console.log('Resultado de la consulta:', results);
    if (results.length === 0 || results[0].esta_aprobada === false) {
      return res.status(404).json({ error: 'Empresa no encontrada o no aprobada' });
    }
    res.status(200).json(results[0]);
  } catch (err) {
    console.error('Error al consultar empresa:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = { getEmpresaById };

