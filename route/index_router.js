import { Router } from 'express';
import { hotelController } from '../controllers/hotel_controller.js';
import { cityController } from '../controllers/city_controller.js';
const router = new Router();

router.get('/hotels', hotelController.getAllHotels);

router.get('/home', cityController.getAllCity);
export default router;