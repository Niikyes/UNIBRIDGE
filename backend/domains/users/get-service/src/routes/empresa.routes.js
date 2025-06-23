const express = require('express');
const router = express.Router();
const { Pool } = require('pg');

// Configura conexión a PostgreSQL
const pool = new Pool({
  connectionString: process.env.DB_URL
});

// Ruta: obtener todas las empresas
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM empresas');
    res.json(result.rows);
  } catch (err) {
    console.error('Error retrieving empresas:', err);
    res.status(500).json({ error: 'Error retrieving empresas' });
  }
});

// Ruta: obtener una empresa por ID
router.get('/empresa/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      'SELECT id, nombre_empresa FROM empresas WHERE id = $1',
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Empresa no encontrada' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error al obtener empresa por ID:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

module.exports = router;


