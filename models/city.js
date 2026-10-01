import { DataTypes, Model } from 'sequelize';

import { sequelize } from "./sequelize_client.js";

export class City extends Model {}

City.init({
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'city'
});