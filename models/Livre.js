const { DataTypes } = require("sequelize");
const db = require("../config/database");

// Définition du modèle Livre
const Livre = db.define("Livre", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  titre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  auteur: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  annee_publication: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Livre;