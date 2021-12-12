import binance from '../config/binance';

const binanceController = (req, res) => {
  const sendingData = [];
  let streamingData = binance.websockets.trades(
    ['BNBBTC', 'ETHBTC'],
    (trades) => {
      let {
        e: eventType,
        E: eventTime,
        s: symbol,
        p: price,
        q: quantity,
        m: maker,
        a: tradeId,
      } = trades;
      let data = {
        symbol: symbol,
        price: price,
        quantity: quantity,
        maker: maker,
        id: tradeId,
      };
      // sendingData.push(data);
      res.sendEventStreamData(data);
    }
  );
  // let interval = setInterval(function generateAndSendRandomNumber() {
  //     res.sendEventStreamData(sendingData);
  //     sendingData=[];
  // }, 500);
  //   close
  res.on('close', () => {
    // clearInterval(interval);
    // res.end();
  });
};

export default binanceController;
