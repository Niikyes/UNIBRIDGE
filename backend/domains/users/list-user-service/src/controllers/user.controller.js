const jwt = require('jsonwebtoken');
const { getUsersService } = require('../services/user.service');
const { JWT_SECRET } = process.env;

const getUsers = async (req, res) => {
  try {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    if (!token) return res.status(401).json({ success: false, message: 'Token is required.' });

    const decoded = jwt.verify(token, JWT_SECRET);
    const requesterRole = decoded.role;

    let excludedRoles = [];
    if (requesterRole === 'admin_global') {
      excludedRoles = [];
    } else if (requesterRole === 'admin_institucional') {
      excludedRoles = ['admin_global', 'admin_institucional'];
    } else {
      return res.status(403).json({ success: false, message: 'Not authorized to list users.' });
    }

    const users = await getUsersService(excludedRoles);
    return res.status(200).json({ success: true, data: users });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = { getUsers };
