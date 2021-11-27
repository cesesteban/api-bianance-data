import express from 'express';
import api from './api';
import binance from './binance';

var router = express.Router();

router.use('/', api);
router.use('/binance', binance);

export default router;
