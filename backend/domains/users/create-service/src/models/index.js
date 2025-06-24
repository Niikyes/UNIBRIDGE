
const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Role = require('./Role')(sequelize, DataTypes);
const User = require('./User')(sequelize, DataTypes);
const Estudiante = require('./Estudiante')(sequelize, DataTypes);
const Empresa = require('./Empresa')(sequelize, DataTypes);

const models = { Role, User, Estudiante, Empresa };

Object.values(models).forEach((model) => {
  if (model.associate) {
    model.associate(models);
  }
});

module.exports = { sequelize, ...models };
