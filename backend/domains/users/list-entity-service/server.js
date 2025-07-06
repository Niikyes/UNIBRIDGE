const app = require("./src/app");
const { sequelize } = require("./src/config/database");
require("dotenv").config();

const PORT = process.env.PORT || 3017;

sequelize.authenticate()
  .then(() => {
    console.log(" Database connected successfully");
    app.listen(PORT, () => {
      console.log(`Service list entity running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });
