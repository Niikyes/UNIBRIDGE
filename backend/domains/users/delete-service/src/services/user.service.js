const User = require('../models/User');
const Role = require('../models/Rol');

const deleteUserService = async (id, allowedRoles) => {
  const user = await User.findByPk(id, {
    include: [Role]
  });

  if (!user) {
    throw new Error('User not found.');
  }

  if (!allowedRoles.includes(user.Role?.name)) {
    throw new Error('Not authorized to delete this user.');
  }

  await user.destroy();
  return { id: user.id, role: user.Role?.name };
};

module.exports = { deleteUserService };
