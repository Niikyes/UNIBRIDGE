const express = require("express");
const router = express.Router();
const { getUniversities, getFaculties, getCareers } = require("../controllers/universityController");

/**
 * @swagger
 * /api/universities/list/universidad:
 *   get:
 *     summary: Get list of universities
 *     tags: [Universities]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of universities
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.get("/list/universidad", getUniversities);

/**
 * @swagger
 * /api/universities/list/facultad:
 *   get:
 *     summary: Get list of faculties
 *     tags: [Universities]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of faculties
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.get("/list/facultad", getFaculties);

/**
 * @swagger
 * /api/universities/list/carrera:
 *   get:
 *     summary: Get list of careers
 *     tags: [Universities]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of careers
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.get("/list/carrera", getCareers);

module.exports = router;
