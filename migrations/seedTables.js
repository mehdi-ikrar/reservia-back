import "dotenv/config";
import { sequelize } from "../models/sequelize_client.js";
// 1. N'oublie pas d'importer le modèle City (et de l'ajouter dans tes associations)
import { Hotel, Theme, City, Activity } from "../models/associations.js";

import { themes } from "../data/themes.js";
import { hotels } from "../data/hotels.js";
import { cities } from "../data/cities.js"; // Ton fichier de data des villes
import { activities } from "../data/activities.js";

// Optionnel : Si tu veux vider/créer les villes d'abord
for (const cit of cities) {
  await City.findOrCreate({
    where: { name: cit.name }, // On cherche par le nom
    defaults: { name: cit.name }
  });
}
console.log('Cities seeded!');

// Insertion des thèmes (on peut aussi les sortir de la boucle des hôtels pour optimiser)
for (const th of themes) {
  await Theme.findOrCreate({
    where: { id: th.id },
    defaults: { name: th.name }
  });
}

// 2. Insertion des hôtels avec leur ville
for (const hot of hotels) {
  const newHotel = await Hotel.create({
    id: hot.id,
    name: hot.name,
    image: hot.image,
    description: hot.description,
    price: hot.price,
    rating: hot.rating,
    lat: hot.lat,
    lng: hot.lng,
    address: hot.address,
    cityId: hot.city?.[0]?.id // Le modèle définit la clé étrangère en camelCase (cityId)
  });

  // Association des thèmes (relation Many-to-Many)
  if (hot.theme && hot.theme.length > 0) {
    const themeIds = hot.theme.map(t => t.id);
    await newHotel.setThemes(themeIds);
  }
}

console.log('Hotels seeded with themes and cities!');

// 3. Insertion des activités avec leur ville
for (const act of activities) {
  await Activity.create({
    id: act.id,
    name: act.name,
    image: act.image,
    cityId: act.cityId // Le modèle définit la clé étrangère en camelCase (cityId)
  });
}

console.log('Activities seeded with cities!');
await sequelize.close();