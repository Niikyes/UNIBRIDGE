
const express = require('express');
const router = express.Router();
const { updateUserStatus } = require('../controllers/user.controller');
const authMiddleware = require('../middleware/authMiddleware');

/**
 * @swagger
 * /users/{id}:
 *   patch:
 *     summary: Cambiar estado del usuario
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Acción ejecutada correctamente
 *       403:
 *         description: No autorizado
 *       404:
 *         description: Usuario no encontrado
 */

router.patch('/:id', authMiddleware, updateUserStatus);

module.exports = router;
