import { Hotel } from '../models/hotelModels.js';
import { Activity } from '../models/activityModels.js';

export const hotelController = {
  async getAllHotels(req, res) {
    try {
      const hotels = await Hotel.findAll();
      const activities = await Activity.findAll();


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