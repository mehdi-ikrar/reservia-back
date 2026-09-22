import { Router } from 'express';
import { hotelController } from '../controllers/hotel_controller.js';

const router = new Router();

router.get('/', hotelController.getAllHotels);

export default router;