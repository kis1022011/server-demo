"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const debugger_1 = require("../utils/debugger");
const fs_1 = __importDefault(require("fs"));
const express_1 = __importDefault(require("express"));
const path_1 = require("../constants/path");
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
exports.registerMiddlewares = (app) => {
    app.use(body_parser_1.default.json());
    app.use(body_parser_1.default.urlencoded({ extended: true }));
    app.use(cors_1.default());
    app.use(helmet_1.default());
    app.use(compression_1.default());
    app.use(express_1.default.static("public"));
    if (process.env.NODE_ENV === "production") {
        app.use(morgan_1.default("combined", { stream: fs_1.default.createWriteStream(path_1.ACCESS_LOG_PATH, { flags: 'a' }) }));
    }
    else {
        app.use(morgan_1.default("dev", { stream: { write: msg => debugger_1.debugInfo(msg) } }));
    }
};
//# sourceMappingURL=middleware.js.map