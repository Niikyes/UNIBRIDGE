const { verifyToken } = require("../utils/jwtUtil");
const {
  listUniversities,
  listFaculties,
  listCareers
} = require("../services/universityService");

const getUniversities = async (req, res) => {
  try {
    verifyToken(req.headers["authorization"]);
    const universities = await listUniversities();
    res.status(200).json(universities);
  } catch (error) {
    console.error("Error getting universities:", error.message);
    res.status(500).json({ message: "Error retrieving universities" });
  }
};

const getFaculties = async (req, res) => {
  try {
    verifyToken(req.headers["authorization"]);
    const faculties = await listFaculties();
    res.status(200).json(faculties);
  } catch (error) {
    console.error("Error getting faculties:", error.message);
    res.status(500).json({ message: "Error retrieving faculties" });
  }
};

const getCareers = async (req, res) => {
  try {
    verifyToken(req.headers["authorization"]);
    const careers = await listCareers();
    res.status(200).json(careers);
  } catch (error) {
    console.error("Error getting careers:", error.message);
    res.status(500).json({ message: "Error retrieving careers" });
  }
};

module.exports = {
  getUniversities,
  getFaculties,
  getCareers
};
