const express = require('express');
const router = express.Router();
const { deleteUser } = require('../controllers/user.controller');

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Eliminar usuario por ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario a eliminar
 *     responses:
 *       200:
 *         description: Usuario eliminado correctamente
 *       403:
 *         description: No autorizado
 *       401:
 *         description: Token requerido
 */
router.delete('/:id', deleteUser);

module.exports = router;
