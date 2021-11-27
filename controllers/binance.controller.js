import binanceService from '../services/binance.service';
import binance from '../config/binance';
class binanceController {
  static async streaming(req, res) {
    try {
      binance.websockets.candlesticks('BNBBTC', '1m', (candlesticks) => {
        let { e: eventType, E: eventTime, s: symbol, k: ticks } = candlesticks;
        let {
          o: open,
          h: high,
          l: low,
          c: close,
          v: volume,
          n: trades,
          i: interval,
          x: isFinal,
          q: quoteVolume,
          V: buyVolume,
          Q: quoteBuyVolume,
        } = ticks;
        console.info(symbol + ' ' + interval + ' candlestick update');
        console.info('open: ' + open);
        console.info('high: ' + high);
        console.info('low: ' + low);
        console.info('close: ' + close);
        console.info('volume: ' + volume);
        console.info('isFinal: ' + isFinal);
      });
      // const response = await binanceService.streaming();
      // res.status(200).json({ success: true, data: response });
    } catch (error) {
      res.status(400).json({ error: error, message: error });
    }
  }
}
export default binanceController;
