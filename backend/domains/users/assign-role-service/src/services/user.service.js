
const User = require('../models/User');
const Rol = require('../models/Rol');
const validate = require('../utils/validateRole');

module.exports = async function assignRoleService(id, data, actorRole) {
  const { error, value } = validate.validate(data);
  if (error) throw { status: 400, message: error.details[0].message };

  const user = await User.findByPk(id);
  if (!user) throw { status: 404, message: 'Usuario no encontrado' };

  const roleRecord = await Rol.findOne({ where: { name: value.role } });
  if (!roleRecord) throw { status: 400, message: 'Rol destino no válido' };

  if (
    (value.role === 'admin_institucional' && actorRole !== 'admin_global') ||
    (value.role === 'coordinador' && actorRole !== 'admin_institucional')
  ) {
    throw { status: 403, message: 'No tienes permisos para asignar este rol' };
  }

  await user.update({ role_id: roleRecord.id });
  return { message: 'Rol asignado correctamente' };
};
