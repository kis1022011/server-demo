"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const express_1 = __importDefault(require("express"));
const systemMessage_1 = require("./constants/systemMessage");
const database_1 = require("./startup/database");
const environment_1 = require("./startup/environment");
const exception_1 = require("./startup/exception");
const middleware_1 = require("./startup/middleware");
const router_1 = require("./startup/router");
const func_1 = require("./utils/func");
const getter_1 = require("./utils/getter");
exception_1.initExceptionHandler();
environment_1.checkEnvironmentVariables();
const app = express_1.default();
middleware_1.registerMiddlewares(app);
router_1.registerRoutes(app);
database_1.connectDatabase();
const port = getter_1.getConfig().port || 5000;
const server = app.listen(port, () => {
    console.log(chalk_1.default.green(func_1.parseStr(systemMessage_1.SYS_MSG_SERVER_STARTED, port)));
});
module.exports = server;
//# sourceMappingURL=server.js.map