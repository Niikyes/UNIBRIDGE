
const express = require('express');
const router = express.Router();
const { getUsers } = require('../controllers/user.controller');
const authMiddleware = require('../middleware/authMiddleware');

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtener usuarios autenticado o información propia
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *         required: false
 *         description: ID del usuario
 *       - in: query
 *         name: email
 *         schema:
 *           type: string
 *         required: false
 *         description: Email del usuario
 *     responses:
 *       200:
 *         description: Usuario(s) encontrados
 *       403:
 *         description: No autorizado
 *       401:
 *         description: Token requerido
 */

router.get('/', authMiddleware, getUsers);

module.exports = router;
