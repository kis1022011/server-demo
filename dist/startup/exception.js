"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("../constants/path");
const winston_1 = require("winston");
const debugger_1 = require("../utils/debugger");
const logger_1 = require("../utils/logger");
exports.initExceptionHandler = () => {
    process.on('uncaughtException', (ex) => {
        debugger_1.debugError(ex);
    });
    if (process.env.NODE_ENV === "production") {
        logger_1.logger.exceptions.handle(new winston_1.transports.File({ filename: path_1.EXCEPTION_LOG_PATH }));
    }
    process.on('unhandledRejection', (ex) => {
        throw ex;
    });
};
//# sourceMappingURL=exception.js.map