
const validateUserData = require('../utils/validateUser');
const createUserService = require('../services/user.service');

const createUser = async (req, res) => {
  try {
    validateUserData(req.body);

    const allowedWithoutAuth = ['estudiante', 'empresa'];
    const roleToCreate = req.body.role;

    // Si no es rol público, se requiere token y rol válido
    if (!allowedWithoutAuth.includes(roleToCreate)) {
      if (!req.user) {
        return res.status(401).json({ message: 'Token requerido para este tipo de usuario' });
      }

      if (
        (roleToCreate === 'coordinador' && req.user.role !== 'admin_institucional') ||
        (roleToCreate === 'admin_institucional' && req.user.role !== 'admin_global') ||
        (roleToCreate === 'admin_global') // nunca se permite crear desde aquí
      ) {
        return res.status(403).json({ message: 'No tienes permisos para crear este tipo de usuario' });
      }
    }

    const userId = await createUserService(req.body);
    return res.status(201).json({ message: 'User created successfully.', user_id: userId });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: error.message });
  }
};

module.exports = { createUser };
