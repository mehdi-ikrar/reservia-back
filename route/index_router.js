import { Router } from 'express';
import { hotelController } from '../controllers/hotel_controller.js';
import { cityController } from '../controllers/city_controller.js';
import { activityController } from '../controllers/activity_controller.js';

const router = new Router();


router.get('/hotel/:id', hotelController.getOneHotel);
router.get('/home', cityController.getAllCity);
router.get('/activity/:id', activityController.getOneActivity);
export default router;