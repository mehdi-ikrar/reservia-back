import { Activity, City } from '../models/associations.js';

export const activityController = {

  async getOneActivity(req, res){
        const { id } = req.params;
        try {
            const activity = await Activity.findByPk(id, {
                attributes: { exclude: ['cityId'] },
                include: [
                    {
                        model: City,
                        attributes: ['id', 'name']
                    }
                ]
            });
            if(!activity) {
                return res.status(404).json({ message : 'Activité non trouvée.' })
            }
            res.status(200).json(activity);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Erreur lors de la récupération de l\'activité.' });
        }
    }
};