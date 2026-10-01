import { Activity } from '../models/activityModels.js';
import {Hotel,Theme,City} from "../models/associations.js";


export const hotelController = {
  async getAllHotels(req, res) {
    try {
      const hotels = await Hotel.findAll({
    attributes: { exclude: ['cityId'] }, // on garde seulement l'objet "city" imbriqué
    include: [
        {
            model: Theme,
            as: 'themes', // Le nom de l'alias défini dans tes associations
            through: { attributes: [] } // Pour éviter d'afficher les détails techniques de la table intermédiaire
        },
        {
            model: City,
            attributes: ['id', 'name']
        }
    ]
});
      const activities = await Activity.findAll({
        attributes: { exclude: ['cityId'] },
        include: [{ model: City, attributes: ['id', 'name'] }]
      });

      
      console.log("=== HÔTEL(S) RÉCUPÉRÉ(S) DE LA BDD ===");
      console.log(hotels);


      res.status(200).json({ hotels, activities });
      
    } catch (error) {
      console.error('Erreur lors de la récupération des hôtels:', error);
      res.status(500).json({ 
        error: 'Erreur lors du chargement des hôtels',
        message: error.message 
      });
    }
  },
};