import binanceService from '../services/binance.service';

class binanceController {
  static async streaming(req, res, next) {
    try {
      binanceService.streaming(req, res, next);
    } catch (error) {
      res.status(400).json({ error: error, message: error });
    }
  }
}

export default binanceController;
