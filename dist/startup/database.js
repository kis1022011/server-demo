"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const mongoose_1 = __importDefault(require("mongoose"));
const systemMessage_1 = require("../constants/systemMessage");
const func_1 = require("../utils/func");
const getter_1 = require("../utils/getter");
exports.connectDatabase = () => {
    const { host, port, user, pass, dbName } = getter_1.getConfig().dbConfig;
    var dbOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
    if (process.env.NODE_ENV == "production") {
        dbOptions = Object.assign({ user: user, pass: pass }, dbOptions);
    }
    let dbAddr = `mongodb://${host}:${port}/${dbName}`;
    mongoose_1.default.set('useCreateIndex', true);
    mongoose_1.default.set('useFindAndModify', false);
    if (process.env.MONGODB_ATLAS_URI) {
        dbAddr = process.env.MONGODB_ATLAS_URI;
        dbOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        };
    }
    mongoose_1.default
        .connect(dbAddr, dbOptions)
        .then(() => console.log(chalk_1.default.green(func_1.parseStr(systemMessage_1.SYS_MSG_DB_CONNECTED, dbAddr))))
        .catch(() => {
        console.log(chalk_1.default.redBright(`${systemMessage_1.SYS_MSG_DB_CANNOT_CONNECT}`));
        process.exit(1);
    });
};
//# sourceMappingURL=database.js.map