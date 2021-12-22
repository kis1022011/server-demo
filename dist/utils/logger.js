"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const path_1 = require("../constants/path");
const { format, createLogger, transports } = winston_1.default;
exports.logger = createLogger({
    format: format.combine(format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
    }), format.json()),
    transports: [
        new transports.File({ filename: path_1.ERROR_LOG_PATH, level: 'error' })
    ]
});
//# sourceMappingURL=logger.js.map