const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Create Service API',
      version: '1.0.0',
      description: 'API documentation for the create microservice in the Users domain of UNIBRIDGE.',
    },
    servers: [
      {
        url: 'http://localhost:3010/api',
        description: 'Local server',
      },
    ],
  },
  apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = {
  swaggerUi,
  swaggerSpec,
};
