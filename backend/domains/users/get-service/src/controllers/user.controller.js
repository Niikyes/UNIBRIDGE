
const getUserService = require('../services/user.service');

const getUsers = async (req, res) => {
  try {
    const { id, email } = req.query;

    const allowed = req.user?.role === 'admin_global' || req.user?.role === 'admin_institucional' || req.user?.role === 'coordinador';

    if ((id || email) && !allowed && req.user?.id !== id) {
      return res.status(403).json({ message: 'No autorizado para consultar este usuario' });
    }

    const users = await getUserService({ id, email });
    res.status(200).json(users);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

module.exports = { getUsers };
