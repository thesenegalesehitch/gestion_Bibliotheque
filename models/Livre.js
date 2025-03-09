const { DataTypes } = require("sequelize");
const db = require("../config/database");

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
// Synchroniser le modèle avec la base de données
db.sync()
  .then(() => {
    console.log("Table 'Livres' synchronisée avec succès");
  })
  .catch((err) => {
    console.error("Erreur de synchronisation:", err);
  });

module.exports = Livre;
