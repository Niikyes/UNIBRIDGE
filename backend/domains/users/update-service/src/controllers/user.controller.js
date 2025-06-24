
const { validateUpdateData } = require('../utils/validateUpdate');
const updateUserService = require('../services/user.service');

const updateUser = async (req, res) => {
  try {
    validateUpdateData(req.body);

    const allowedRoles = ['admin_global', 'admin_institucional', 'coordinador'];
    const isSelf = req.user?.id === req.params.id;

    if (!isSelf && !allowedRoles.includes(req.user?.role)) {
      return res.status(403).json({ message: 'Solo administradores pueden modificar a otros usuarios.' });
    }

    const result = await updateUserService(req.params.id, req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(error.status || 400).json({ message: error.message });
  }
};

module.exports = { updateUser };
