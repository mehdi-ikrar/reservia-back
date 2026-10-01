import { City, Hotel, Activity, Theme } from "../models/associations.js";

export const cityController = {
  async getAllCity(req, res) {
    try {
      // 1. On récupère TOUTES les villes avec leurs hôtels et activités
      const cities = await City.findAll({
        include: [
          {
            model: Hotel,
            required: false
          },
          {
            model: Activity,
            required: false
          }
        ]
      });

      // 2. On récupère tous les hôtels (avec leurs thèmes et leur ville)
      const hotels = await Hotel.findAll({
        include: [City, Theme]
      });

      // 3. ON AJOUTE AUSSI TOUTES LES ACTIVITÉS (avec leur ville)
      const activities = await Activity.findAll({
        include: [City]
      });

      // 4. On envoie tout au front dans un seul colis complet
      res.json({
        cities,
        hotels,
        activities // <--- Maintenant, tu as aussi ton tableau d'activités global !
      });

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur serveur" });
    }
  }
};