
const express = require('express');
const router = express.Router();
const { assignRole } = require('../controllers/user.controller');
const authMiddleware = require('../middleware/authMiddleware');

/**
 * @swagger
 * /users/{id}/assign-role:
 *   patch:
 *     summary: Asignar rol a un usuario
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del usuario a modificar
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               role:
 *                 type: string
 *                 enum: [admin_institucional, coordinador]
 *     responses:
 *       200:
 *         description: Rol asignado correctamente
 *       400:
 *         description: Solicitud inválida
 *       403:
 *         description: Sin permisos
 */

router.patch('/:id/assign-role', authMiddleware, assignRole);

module.exports = router;
