class binanceMiddleware {
  static async eventsMiddleware(req, res, next) {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');

    // only if you want anyone to access this endpoint
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.flushHeaders();

    const sendEventStreamData = (data) => {
      const sseFormattedResponse = `data: ${JSON.stringify(data)}\n\n`;
      res.write(sseFormattedResponse);
    };

    // we are attaching sendEventStreamData to res, so we can use it later
    Object.assign(res, {
      sendEventStreamData,
    });

    next();
  }
}

export default binanceMiddleware;
