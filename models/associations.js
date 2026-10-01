import { Theme } from './themeModels.js';
import { Hotel } from './hotelModels.js';
import { City } from './city.js';
import { Activity } from './activityModels.js';
Hotel.belongsToMany(Theme, { through: 'HotelTheme' });
Theme.belongsToMany(Hotel, { through: 'HotelTheme' });

City.hasMany(Hotel, { foreignKey: 'cityId' });
Hotel.belongsTo(City, { foreignKey: 'cityId' });

City.hasMany(Activity, { foreignKey: 'cityId' });
Activity.belongsTo(City, { foreignKey: 'cityId' });

export { Hotel, Theme, City, Activity };