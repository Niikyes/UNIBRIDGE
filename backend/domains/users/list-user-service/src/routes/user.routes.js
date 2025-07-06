const express = require('express');
const router = express.Router();
const { getUsers } = require('../controllers/user.controller');

/**
 * @swagger
 * /users/table:
 *   get:
 *     summary: Listar usuarios filtrados por rol
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *       403:
 *         description: No autorizado
 *       401:
 *         description: Token requerido
 */
router.get('/list', getUsers);

module.exports = router;
