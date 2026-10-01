import { DataTypes, Model } from 'sequelize';

import { sequelize } from "./sequelize_client.js";

export class Theme extends Model {}

Theme.init({
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'theme'
});