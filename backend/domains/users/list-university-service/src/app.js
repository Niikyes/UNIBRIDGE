const express = require("express");
const cors = require("cors");
const universityRoutes = require("./routes/universityRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("../swagger/swagger");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/universities", universityRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;
