
const express = require('express');
const router = express.Router();
const { createUser } = require('../controllers/user.controller');
const authMiddleware = require('../middleware/authMiddleware');

// Registro sin token
router.post('/estudiante', createUser);
router.post('/empresa', createUser);

// Requieren token (admin global o institucional)
router.post('/coordinador', authMiddleware, createUser);
router.post('/admin_institucional', authMiddleware, createUser);

module.exports = router;
