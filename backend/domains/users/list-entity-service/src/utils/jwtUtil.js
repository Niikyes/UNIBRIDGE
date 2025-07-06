const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (authHeader) => {
  if (!authHeader) throw new Error("Token not provided");
  const token = authHeader.split(" ")[1];
  return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = { verifyToken };
