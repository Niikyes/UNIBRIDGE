
const Joi = require('joi');

module.exports = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  nickname: Joi.string().min(3).required(),
  role: Joi.string().valid('estudiante', 'empresa', 'coordinador', 'admin_institucional', 'admin_global').required()
});
