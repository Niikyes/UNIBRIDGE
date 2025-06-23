const express = require('express');
const router = express.Router();
const { getEmpresaById } = require('../controllers/empresa.controller');

router.get('/:id', getEmpresaById);

module.exports = router;



