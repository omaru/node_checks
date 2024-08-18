import winston from 'winston';

const { combine, timestamp, json } = winston.format;

const logger = winston.createLogger({
    level: 'info',
    format: combine(
        timestamp(),
        json()
    ),
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
        new winston.transports.Console({ format: winston.format.simple() })
    ]
});

export const buildLogger = (service: string) => {
    return {
        log: (message: string) => {
            logger.log('info', { service, message });
        },
        error: (message: string) => {
            logger.log('error', { service, message });
        }
    }
}