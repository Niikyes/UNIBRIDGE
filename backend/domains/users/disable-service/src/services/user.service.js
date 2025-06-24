
const User = require('../models/User');

module.exports = async function handleUserStatus(id, actorRole) {
  const user = await User.findByPk(id);
  if (!user) throw { status: 404, message: 'Usuario no encontrado' };

  const allowedRoles = ['admin_global', 'admin_institucional', 'coordinador'];

  if (actorRole !== 'admin_global' && 'disable-service' === 'delete-service') {
    throw { status: 403, message: 'Solo admin_global puede eliminar usuarios permanentemente' };
  }

  if (!allowedRoles.includes(actorRole)) {
    throw { status: 403, message: 'No tienes permisos suficientes' };
  }

  await user.update({ is_active: false });

  return { message: 'Usuario deshabilitado correctamente' };
};
