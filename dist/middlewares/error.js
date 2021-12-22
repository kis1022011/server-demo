"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const httpCode_1 = require("../constants/httpCode");
const systemMessage_1 = require("../constants/systemMessage");
const debugger_1 = require("../utils/debugger");
const logger_1 = require("../utils/logger");
function error(err, req, res, next) {
    if (process.env.NODE_ENV === 'production') {
        logger_1.logger.error(err.message, err);
    }
    else {
        debugger_1.debugError(err);
    }
    res.status(httpCode_1.HTTP_CODE_SERVER_ERROR).send(systemMessage_1.SYS_MSG_SERVER_ERROR);
}
exports.error = error;
//# sourceMappingURL=error.js.map