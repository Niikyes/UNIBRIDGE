const express = require('express');
const router = express.Router();
const { enableUser, disableUser } = require('../controllers/user.controller');

/**
 * @swagger
 * /users/{id}/enable:
 *   put:
 *     summary: Habilitar usuario por ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario a habilitar
 *     responses:
 *       200:
 *         description: Usuario habilitado correctamente
 *       403:
 *         description: No autorizado
 *       401:
 *         description: Token requerido
 *
 * /users/{id}/disable:
 *   put:
 *     summary: Deshabilitar usuario por ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario a deshabilitar
 *     responses:
 *       200:
 *         description: Usuario deshabilitado correctamente
 *       403:
 *         description: No autorizado
 *       401:
 *         description: Token requerido
 */
router.put('/:id/enable', enableUser);
router.put('/:id/disable', disableUser);

module.exports = router;
