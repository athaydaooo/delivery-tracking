import { WinstonModuleOptions } from 'nest-winston';
import * as winston from 'winston';

export const loggerOptions: WinstonModuleOptions = {
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
  ),
  transports: [
    new winston.transports.File({
      filename: './logs/error.log',
      level: 'error',
    }),
    new winston.transports.File({
      filename: './logs/info.log',
      level: 'info',
    }),
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple(),
      ),
    }),
  ],
};
