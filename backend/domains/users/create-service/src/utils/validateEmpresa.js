
const Joi = require('joi');

module.exports = Joi.object({
  nombre_empresa: Joi.string().required(),
  ruc_empresa: Joi.string().min(10).required(),
  direccion: Joi.string().required(),
  telefono_contacto: Joi.string().required()
});
