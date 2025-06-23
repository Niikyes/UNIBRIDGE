const pool = require('../config/db');

const getEmpresaById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      'SELECT id, nombre_empresa, esta_aprobada FROM empresas WHERE id = $1',
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Empresa no encontrada' });
    }

    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error('Error al consultar empresa:', err);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

module.exports = { getEmpresaById };
