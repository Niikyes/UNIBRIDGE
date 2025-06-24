
const handleUser = require('../services/user.service');

const updateUserStatus = async (req, res) => {
  try {
    const result = await handleUser(req.params.id, req.user?.role);
    res.status(200).json(result);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

module.exports = { updateUserStatus };
