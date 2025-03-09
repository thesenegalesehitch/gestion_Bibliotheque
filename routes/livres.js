const express = require("express");
const router = express.Router();
const livresController = require("../controllers/livresController");

// Routes pour les livres
router.get("/", livresController.getAllLivres); // Récupérer tous les livres
router.post("/", livresController.createLivre); // Ajouter un livre
router.delete("/:id", livresController.deleteLivre); // Supprimer un livre

module.exports = router;