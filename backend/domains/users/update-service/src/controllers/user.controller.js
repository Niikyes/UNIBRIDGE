const jwt = require('jsonwebtoken');
const { updateUserService } = require('../services/user.service');
const { JWT_SECRET } = process.env;

const updateUser = async (req, res) => {
  try {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({ success: false, message: 'Token is required.' });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    const requesterRole = decoded.role;

    let allowedRoles = [];

    if (requesterRole === 'admin_global') {
      allowedRoles = ['admin_global', 'admin_institucional', 'coordinador', 'empresa', 'estudiante'];
    } else if (requesterRole === 'admin_institucional') {
      allowedRoles = ['coordinador', 'empresa', 'estudiante'];
    } else {
      return res.status(403).json({ success: false, message: 'Not authorized to update users.' });
    }

    const { id } = req.params;
    const updatedUser = await updateUserService(id, req.body, allowedRoles);

    return res.status(200).json({ success: true, message: 'User updated successfully.', data: updatedUser });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = { updateUser };
