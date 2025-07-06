const express = require('express');
const router = express.Router();
const { updateUser } = require('../controllers/user.controller');

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Actualizar usuario por ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Usuario actualizado correctamente
 *       403:
 *         description: No autorizado
 *       401:
 *         description: Token requerido
 */
router.put('/:id', updateUser);

module.exports = router;
