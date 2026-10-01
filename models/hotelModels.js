import { DataTypes, Model } from 'sequelize';

import { sequelize } from "./sequelize_client.js";

export class Hotel extends Model {}

Hotel.init({
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  lat: { 
    type: DataTypes.FLOAT,
    allowNull: true
  },
  lng: { 
    type: DataTypes.FLOAT,
    allowNull: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'hotel'
});