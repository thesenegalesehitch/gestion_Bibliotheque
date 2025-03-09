const express = require("express");
const router = express.Router();
const livresController = require("../controllers/livresController");

// Routes CRUD
router.get("/", livresController.getAllLivres); // Récupérer tous les livres
router.get("/:id", livresController.getLivreById); // Récupérer un livre par ID
router.post("/", livresController.createLivre); // Ajouter un livre
router.put("/:id", livresController.updateLivre); // Mettre à jour un livre
router.delete("/:id", livresController.deleteLivre); // Supprimer un livre

module.exports = router;