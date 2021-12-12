import { Router } from 'express';
const router = Router();
// const binance = new Binance().options({
//   APIKEY: process.env.API_KEY,
//   APISECRET: process.env.SECRET_KEY,
// });
//import Binance from 'node-binance-api';
import binanceController from '../controllers/binance.controller.js';
import binanceMiddleware from '../middlewares/binance.middlewares';

// const useServerSentEventsMiddleware = (req, res, next) => {
//   res.setHeader('Content-Type', 'text/event-stream');
//   res.setHeader('Cache-Control', 'no-cache');

//   // only if you want anyone to access this endpoint
//   res.setHeader('Access-Control-Allow-Origin', '*');

//   res.flushHeaders();

//   const sendEventStreamData = (data) => {
//     const sseFormattedResponse = `data: ${JSON.stringify(data)}\n\n`;
//     res.write(sseFormattedResponse);
//   };

//   // we are attaching sendEventStreamData to res, so we can use it later
//   Object.assign(res, {
//     sendEventStreamData,
//   });

//   next();
// };

// const streamRandomNumbers = (req, res) => {
//   const sendingData = [];
//   let streamingData = binance.websockets.trades(
//     ['BNBBTC', 'ETHBTC'],
//     (trades) => {
//       let {
//         e: eventType,
//         E: eventTime,
//         s: symbol,
//         p: price,
//         q: quantity,
//         m: maker,
//         a: tradeId,
//       } = trades;
//       let data = {
//         symbol: symbol,
//         price: price,
//         quantity: quantity,
//         maker: maker,
//         id: tradeId,
//       };
//       // sendingData.push(data);
//       res.sendEventStreamData(data);
//     }
//   );
//   // let interval = setInterval(function generateAndSendRandomNumber() {
//   //     res.sendEventStreamData(sendingData);
//   //     sendingData=[];
//   // }, 500);
//   //   close
//   res.on('close', () => {
//     // clearInterval(interval);
//     // res.end();
//   });
// };

//router.get('/streaming', useServerSentEventsMiddleware, streamRandomNumbers);
router.get(
  '/streaming',
  binanceMiddleware.eventsMiddleware,
  binanceController.streaming
);

export default router;
