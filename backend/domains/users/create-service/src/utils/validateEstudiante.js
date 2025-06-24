
const Joi = require('joi');

module.exports = Joi.object({
  universidad: Joi.string().required(),
  facultad: Joi.string().required(),
  carrera: Joi.string().required(),
  cedula: Joi.string().min(6).required(),
  telefono: Joi.string().required(),
  fecha_nacimiento: Joi.date().required()
});
