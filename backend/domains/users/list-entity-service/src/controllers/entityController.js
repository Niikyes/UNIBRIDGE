const { verifyToken } = require("../utils/jwtUtil");
const {
  listStudents,
  listCompanies,
  listCoordinators,
  listPendingCompanies
} = require("../services/entityService");

const getStudents = async (req, res) => {
  try {
    verifyToken(req.headers["authorization"]);
    const students = await listStudents();
    res.status(200).json(students);
  } catch (error) {
    console.error("Error getting students:", error.message);
    res.status(500).json({ message: "Error retrieving students" });
  }
};

const getCompanies = async (req, res) => {
  try {
    verifyToken(req.headers["authorization"]);
    const companies = await listCompanies();
    res.status(200).json(companies);
  } catch (error) {
    console.error("Error getting companies:", error.message);
    res.status(500).json({ message: "Error retrieving companies" });
  }
};

const getCoordinators = async (req, res) => {
  try {
    verifyToken(req.headers["authorization"]);
    const coordinators = await listCoordinators();
    res.status(200).json(coordinators);
  } catch (error) {
    console.error("Error getting coordinators:", error.message);
    res.status(500).json({ message: "Error retrieving coordinators" });
  }
};

const getPendingCompanies = async (req, res) => {
  try {
    verifyToken(req.headers["authorization"]);
    const pendingCompanies = await listPendingCompanies();
    res.status(200).json(pendingCompanies);
  } catch (error) {
    console.error("Error getting pending companies:", error.message);
    res.status(500).json({ message: "Error retrieving pending companies" });
  }
};

module.exports = {
  getStudents,
  getCompanies,
  getCoordinators,
  getPendingCompanies
};
