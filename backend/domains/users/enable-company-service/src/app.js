const express = require("express");
const cors = require('cors');
const app = express();
require("dotenv").config();
const companyRoutes = require("./routes/companyRoutes");
const setupSwagger = require("../swagger");

app.use(cors());
app.use(express.json());
app.use("/api", companyRoutes);

setupSwagger(app);

module.exports = app;
