import { Hotel } from '../models/hotel.js';

export const hotelController = {
  async getAllHotels(req, res) {
    try {
      const hotels = await Hotel.findAll();

      // On affiche dans la console AVANT d'envoyer la réponse
      console.log("=== HÔTEL(S) RÉCUPÉRÉ(S) DE LA BDD ===");
      console.log(hotels);

      // Ensuite, on envoie les hôtels à la vue
      res.status(200).render('pages/home', { 
        hotels
      });
      
    } catch (error) {
      console.error('Erreur lors de la récupération des hôtels:', error);
      res.status(500).json({ 
        error: 'Erreur lors du chargement des hôtels',
        message: error.message 
      });
    }
  },
};