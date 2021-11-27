import config from '../config/index.js';
import binance from '../config/index.js';

class binanceService {
  static async streaming() {
    try {
      const response = await new Promise((succes, failure) => {
        console.log('streaming');
      });
      return response;
    } catch (error) {
      return error;
    }
  }
}
export default binanceService;
