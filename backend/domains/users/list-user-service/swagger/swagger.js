module.exports = {
  openapi: '3.0.0',
  info: {
    title: 'List User Service API',
    version: '1.0.0',
    description: 'API para listar usuarios filtrados según rol.'
  },
  paths: {},
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT'
      }
    }
  },
  security: [{ bearerAuth: [] }]
};
