import { DataTypes, Model } from 'sequelize';

import { sequelize } from "./sequelize_client.js";

export class Activity extends Model {}

Activity.init({
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  image: {
    type: DataTypes.STRING(200),
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'activity'
});