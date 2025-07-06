const User = require('../models/User');
const Role = require('../models/Role');

const enableUserService = async (id, allowedRoles) => {
  const user = await User.findByPk(id, {
    include: [Role]
  });
  if (!user) throw new Error('User not found.');

  const actualRoleName = user.Role?.name?.toLowerCase();
  console.log("Rol actual del usuario:", actualRoleName);
  console.log("Roles permitidos:", allowedRoles);

  if (!allowedRoles.includes(actualRoleName)) {
    throw new Error('Not authorized to enable this user.');
  }

  await user.update({ is_active: true });
  return { id: user.id, is_active: true };
};

const disableUserService = async (id, allowedRoles) => {
  const user = await User.findByPk(id, {
    include: [Role]
  });
  if (!user) throw new Error('User not found.');

  const actualRoleName = user.Role?.name?.toLowerCase();
  console.log("Rol actual del usuario:", actualRoleName);
  console.log("Roles permitidos:", allowedRoles);

  if (!allowedRoles.includes(actualRoleName)) {
    throw new Error('Not authorized to disable this user.');
  }

  await user.update({ is_active: false });
  return { id: user.id, is_active: false };
};

module.exports = { enableUserService, disableUserService };

