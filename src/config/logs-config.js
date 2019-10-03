/*This file contains the logger configurations and options*/
import path from "path";
import { createLogger, format, transports } from "winston";
const { combine, timestamp, printf, colorize } = format;

const appRoot = path.dirname(require.main.filename);
const logFormat = printf(
  info => `[${info.timestamp}]  ${info.level}: ${info.message}`
);

const logOptions = {
  console: {
    silent: process.env.NODE_ENV === "test",
    json: true,
    format: combine(colorize({ all: false }), logFormat)
  },
  verboseDebug: {
    filename: `${appRoot}/logs/debug.log`,
    level: "info",
    format: combine(logFormat),
    maxsize: 5242880, // 5MB
    maxFiles: 5
  }
};

const logger = createLogger({
  format: combine(
    timestamp({
      format: "YYYY-MM-DD HH:mm:ss"
    })
  ),
  transports: [
    new transports.Console(logOptions.console),
    new transports.File(logOptions.verboseDebug)
  ],
  exitOnError: false
});

logger.stream = {
  write: function(message, encoding) {
    logger.info(message);
  }
};

export default logger;
