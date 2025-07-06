const User = require('../models/User');
const Role = require('../models/Role');

const getUsersService = async (excludedRoles) => {
  let where = {};
  if (excludedRoles.length > 0) {
    where = {
      '$role.name$': { [require('sequelize').Op.notIn]: excludedRoles }
    };
  }
  const users = await User.findAll({
    where,
    include: [{ model: Role, as: 'role', attributes: ['id', 'name'] }],
    attributes: { exclude: ['password_hash'] }
  });
  return users;
};

module.exports = { getUsersService };
