
const express = require('express');
const router = express.Router();
const { updateUser } = require('../controllers/user.controller');
const authMiddleware = require('../middleware/authMiddleware');

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Actualizar usuario (autenticado o administrador)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del usuario a actualizar
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             description: Campos actualizables según tipo de usuario
 *     responses:
 *       200:
 *         description: Usuario actualizado correctamente
 *       401:
 *         description: Token inválido
 *       403:
 *         description: No autorizado
 */

router.put('/:id', authMiddleware, updateUser);

module.exports = router;
