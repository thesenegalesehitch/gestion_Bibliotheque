const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./config/database"); // Importer la config de la base
const livresRoutes = require("./routes/livres"); // Importer les routes

// Middleware
app.use(bodyParser.json());
app.use("/livres", livresRoutes);

// Test de connexion à la base de données
db.authenticate()
  .then(() => console.log("Connecté à la base de données MySQL"))
  .catch((err) => console.error("Erreur de connexion à la base:", err));

// Route d'accueil
app.get("/", (req, res) => {
  res.send("Bienvenue dans l'API bibliothèque !");
});

// Démarrage du serveur
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
