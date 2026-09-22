import "dotenv/config";
import { sequelize } from "../models/sequelize_client.js";

import { Hotel } from "../models/hotel.js";
import { hotels } from "../data/hotels.js";

for (const hot of hotels) {
    
  await Hotel.create({
    id: hot.id,
    name: hot.name,
    image: hot.image,
    description: hot.description,
    price: hot.price,
    rating: hot.rating,
    lat: hot.lat,
    lng: hot.lng,
    address: hot.address,
    city: hot.city,
    style: hot.style
  });
}
console.log('Hotels seeded');

await sequelize.close();