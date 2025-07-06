const app = require('./src/app');
const userRoutes = require('./src/routes/user.routes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger');

app.use('/users', userRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 3016;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
