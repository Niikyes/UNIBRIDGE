const app = require("./src/app");
const { sequelize } = require("./src/config/database");
require("dotenv").config();

const PORT = process.env.PORT || 3018;

sequelize.authenticate()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(PORT, () => {
      console.log(`Server list university running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });
