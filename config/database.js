const { Sequelize } = require("sequelize");

// Connexion à la base de données MySQL
const sequelize = new Sequelize("bibliotheque", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;