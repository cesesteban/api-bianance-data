import { Router } from 'express';
const router = Router();
import binanceController from '../controllers/binance.controller.js';

router.get('/streaming', binanceController.streaming);

export default router;
