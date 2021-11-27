import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
  res.send('api-binance-data');
});
export default router;
