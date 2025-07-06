const express = require("express");
const router = express.Router();
const { enableCompanyController } = require("../controllers/companyController");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).json({ message: "Token no proporcionado." });

  jwt.verify(token.split(" ")[1], process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Token inválido." });
    if (decoded.role !== "admin_institucional") {
      return res.status(403).json({ message: "Permisos insuficientes." });
    }
    req.user = decoded;
    next();
  });
};

router.put("/companies/:id/enable", verifyToken, enableCompanyController);

module.exports = router;
