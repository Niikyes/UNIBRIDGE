
const User = require('../models/User');
const Estudiante = require('../models/Estudiante');
const Empresa = require('../models/Empresa');
const Rol = require('../models/Rol');

module.exports = async function getUserService({ id, email }) {
  const whereClause = {};
  if (id) whereClause.id = id;
  if (email) whereClause.email = email;

  const users = await User.findAll({
    where: whereClause,
    attributes: { exclude: ['password'] },
    include: [
      { model: Estudiante },
      { model: Empresa },
      { model: Rol }
    ]
  });

  if (!users.length) throw { status: 404, message: 'Usuario no encontrado' };

  return id || email ? users[0] : users;
};
