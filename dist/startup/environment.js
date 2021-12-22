"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const lodash_1 = __importDefault(require("lodash"));
const systemMessage_1 = require("../constants/systemMessage");
const getter_1 = require("../utils/getter");
const debugger_1 = require("../utils/debugger");
exports.checkEnvironmentVariables = () => {
    lodash_1.default.cloneDeepWith(getter_1.getConfig(), (v) => {
        if (lodash_1.default.isEmpty(v) && !lodash_1.default.isNumber(v)) {
            debugger_1.debugError(chalk_1.default.redBright(`${systemMessage_1.SYS_MSG_SERVER_CANNOT_START}`));
            process.exit(1);
        }
    });
};
//# sourceMappingURL=environment.js.map