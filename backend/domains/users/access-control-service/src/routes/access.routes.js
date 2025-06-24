
const express = require('express');
const router = express.Router();
const accessController = require('../controllers/access.controller');
const authMiddleware = require('../middleware/authMiddleware');

/**
 * @swagger
 * /access:
 *   post:
 *     summary: Verifica si el usuario autenticado tiene acceso al rol requerido
 *     tags: [Access]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               requiredRole:
 *                 type: string
 *                 example: coordinador
 *     responses:
 *       200:
 *         description: Acceso permitido
 *       403:
 *         description: Acceso denegado
 *       401:
 *         description: Token inválido o faltante
 */

router.post('/', authMiddleware, accessController);

module.exports = router;
