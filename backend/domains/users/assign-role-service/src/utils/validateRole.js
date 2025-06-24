
const Joi = require('joi');

const schema = Joi.object({
  role: Joi.string().valid('admin_institucional', 'coordinador').required()
});

module.exports = {
  validate: (data) => schema.validate(data)
};
