const { Sequelize } = require("sequelize");

// Connexion à la base de données MySQL
const sequelize = new Sequelize("bibliotheque", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  port: 8889, // Assurez-vous d'utiliser le bon port MySQL si vous êtes sous MAMP (par défaut, c'est 8889)
});

module.exports = sequelize;
