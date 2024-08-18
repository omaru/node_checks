"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildLogger = exports.logger = void 0;
const winston_1 = __importDefault(require("winston"));
const { combine, timestamp, json } = winston_1.default.format;
exports.logger = winston_1.default.createLogger({
    level: 'info',
    format: combine(timestamp(), json()),
    transports: [
        new winston_1.default.transports.File({ filename: 'error.log', level: 'error' }),
        new winston_1.default.transports.File({ filename: 'combined.log' }),
        new winston_1.default.transports.Console({ format: winston_1.default.format.simple() })
    ]
});
const buildLogger = (service) => {
    return {
        log: (message) => {
            exports.logger.log('info', { service, message });
        },
        error: (message) => {
            exports.logger.log('error', { service, message });
        }
    };
};
exports.buildLogger = buildLogger;
