const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/user.routes');
const empresaRoutes = require('./routes/empresa.routes');
const { swaggerUi, swaggerSpec } = require('../swagger/swagger');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/empresas', empresaRoutes); // ahora con prefijo

// Swagger
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;
