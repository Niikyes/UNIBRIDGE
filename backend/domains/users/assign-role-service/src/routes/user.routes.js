const express = require('express');
const router = express.Router();
const { assignRole } = require('../controllers/user.controller');

/**
 * @swagger
 * /users/{id}/assign-role:
 *   put:
 *     summary: Asignar nuevo rol a un usuario
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               newRole:
 *                 type: string
 *     responses:
 *       200:
 *         description: Rol asignado correctamente
 *       403:
 *         description: No autorizado
 *       401:
 *         description: Token requerido
 */
router.put('/:id/assign-role', assignRole);

module.exports = router;
