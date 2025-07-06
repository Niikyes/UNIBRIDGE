const jwt = require('jsonwebtoken');
const { enableUserService, disableUserService } = require('../services/user.service');
const { JWT_SECRET } = process.env;

const enableUser = async (req, res) => {
  try {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    if (!token) return res.status(401).json({ success: false, message: 'Token is required.' });

    const decoded = jwt.verify(token, JWT_SECRET);
    const requesterRole = decoded.role;

    let allowedRoles = [];
    if (requesterRole === 'admin_global') {
      allowedRoles = ['admin_institucional', 'coordinador', 'empresa', 'estudiante'];
    } else if (requesterRole === 'admin_institucional') {
      allowedRoles = ['coordinador', 'empresa', 'estudiante'];
    } else {
      return res.status(403).json({ success: false, message: 'Not authorized to enable users.' });
    }

    const { id } = req.params;
    const updatedUser = await enableUserService(id, allowedRoles);
    return res.status(200).json({ success: true, message: 'User enabled successfully.', data: updatedUser });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false, message: error.message });
  }
};

const disableUser = async (req, res) => {
  try {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    if (!token) return res.status(401).json({ success: false, message: 'Token is required.' });

    const decoded = jwt.verify(token, JWT_SECRET);
    const requesterRole = decoded.role;

    let allowedRoles = [];
    if (requesterRole === 'admin_global') {
      allowedRoles = ['admin_institucional', 'coordinador', 'empresa', 'estudiante'];
    } else if (requesterRole === 'admin_institucional') {
      allowedRoles = ['coordinador', 'empresa', 'estudiante'];
    } else {
      return res.status(403).json({ success: false, message: 'Not authorized to disable users.' });
    }

    const { id } = req.params;
    const updatedUser = await disableUserService(id, allowedRoles);
    return res.status(200).json({ success: true, message: 'User disabled successfully.', data: updatedUser });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = { enableUser, disableUser };
