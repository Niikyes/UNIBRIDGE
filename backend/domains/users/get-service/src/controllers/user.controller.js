const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { JWT_SECRET } = process.env;

const getUsersByRole = async (req, res) => {
  try {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

    if (!token) {
      return res.status(401).json({ success: false, message: 'Token is required.' });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    const requesterRole = decoded.role;

    let allowedRoles = [];

    if (requesterRole === 'admin_global') {
      allowedRoles = ['admin_institucional', 'coordinador', 'empresa', 'estudiante'];
    } else if (requesterRole === 'admin_institucional') {
      allowedRoles = ['coordinador', 'empresa', 'estudiante'];
    } else {
      return res.status(403).json({ success: false, message: 'Not authorized to access users.' });
    }

    const users = await User.findAll({
      where: { role: allowedRoles },
      attributes: { exclude: ['password'] },
    });

    return res.status(200).json({ success: true, data: users });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = { getUsersByRole };
