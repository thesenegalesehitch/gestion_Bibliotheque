const Livre = require("../models/Livre");

// Récupérer tous les livres
exports.getAllLivres = async (req, res) => {
  try {
    const livres = await Livre.findAll();
    res.json(livres);
  } catch (err) {
    res.status(500).json({ error: "Erreur lors de la récupération des livres" });
  }
};

// Ajouter un nouveau livre
exports.createLivre = async (req, res) => {
  const { titre, auteur, annee_publication } = req.body;
  try {
    const nouveauLivre = await Livre.create({ titre, auteur, annee_publication });
    res.status(201).json(nouveauLivre);
  } catch (err) {
    res.status(500).json({ error: "Erreur lors de l'ajout du livre" });
  }
};

// Supprimer un livre
exports.deleteLivre = async (req, res) => {
  const { id } = req.params;
  try {
    const livre = await Livre.findByPk(id);
    if (!livre) {
      return res.status(404).json({ error: "Livre non trouvé" });
    }
    await livre.destroy();
    res.json({ message: "Livre supprimé avec succès" });
  } catch (err) {
    res.status(500).json({ error: "Erreur lors de la suppression du livre" });
  }
};