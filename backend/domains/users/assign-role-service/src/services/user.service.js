const User = require('../models/User');
const Role = require('../models/Role');

const assignRoleService = async (id, newRole, requesterRole, allowedRoles) => {
  const user = await User.findByPk(id, {
    include: [Role]
  });

  if (!user) {
    throw new Error('User not found.');
  }

  console.log("Rol actual del usuario:", user.Role?.name);
  console.log("Roles permitidos:", allowedRoles);

  if (!allowedRoles.includes(user.Role?.name)) {
    throw new Error('Not authorized to assign role to this user.');
  }

  // Validaciones extra para asignar el nuevo rol
  if (
    (newRole === 'admin_institucional' && requesterRole !== 'admin_global') ||
    (newRole === 'coordinador' && requesterRole !== 'admin_institucional' && requesterRole !== 'admin_global') ||
    (newRole === 'admin_global')
  ) {
    throw new Error('Not authorized to assign this new role.');
  }

  // Buscar el nuevo rol en la tabla roles
  const targetRole = await Role.findOne({ where: { name: newRole } });
  if (!targetRole) {
    throw new Error('Role not found.');
  }

  await user.update({ role_id: targetRole.id });

  return { id: user.id, newRole };
};

module.exports = { assignRoleService };
