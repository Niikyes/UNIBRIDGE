const express = require("express");
const router = express.Router();
const {
    getStudents,
    getCompanies,
    getCoordinators,
    getPendingCompanies
} = require("../controllers/entityController");

/**
 * @swagger
 * /api/entities/list/estudiante:
 *   get:
 *     summary: Get list of students
 *     tags: [Entities]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of students
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.get("/list/estudiante", getStudents);

/**
 * @swagger
 * /api/entities/list/empresa:
 *   get:
 *     summary: Get list of companies
 *     tags: [Entities]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of companies
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.get("/list/empresa", getCompanies);

/**
 * @swagger
 * /api/entities/list/coordinador:
 *   get:
 *     summary: Get list of coordinators
 *     tags: [Entities]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of coordinators
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.get("/list/coordinador", getCoordinators);

/**
 * @swagger
 * /api/entities/empresas/pendientes:
 *   get:
 *     summary: Get list of pending companies
 *     tags: [Entities]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of pending companies
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.get("/empresas/pendientes", getPendingCompanies);

module.exports = router;
