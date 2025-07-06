const app = require("./src/app");
const { sequelize } = require("./src/config/database");

const PORT = process.env.PORT || 3009;

const start = async () => {
  try {
    await sequelize.authenticate();
    console.log("Base de datos conectada correctamente");
    app.listen(PORT, () => console.log(`Servidor enable company escuchando en el puerto ${PORT} `));
  } catch (error) {
    console.error("Error al conectar la base de datos:", error);
  }
};

start();
