const User = require('../models/User');
const Role = require('../models/Role');

const updateUserService = async (id, data, allowedRoles) => {
  const user = await User.findByPk(id, {
    include: [Role]
  });

  if (!user) throw new Error("User not found.");

  console.log("Rol actual del usuario:", user.Role?.name);
  console.log("Roles permitidos:", allowedRoles);

  if (!allowedRoles.includes(user.Role?.name)) {
    throw new Error("Not authorized to update this user.");
  }

  await user.update(data);
  return user;
};

module.exports = { updateUserService };
