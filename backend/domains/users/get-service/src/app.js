const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/user.routes');
const { swaggerUi, swaggerSpec } = require('../swagger/swagger');
const empresaRoutes = require('./routes/empresa.routes');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/empresas', empresaRoutes);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;
