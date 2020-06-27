const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    // - Write all logs below to `winstonLog.log`
    new winston.transports.File({ filename: 'winstonLog.log' }),
  ],
});

module.exports = logger;
