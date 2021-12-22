"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
exports.ASSETS_FOLDER = `${path_1.default.resolve('assets')}${process.env.NODE_ENV == "test" ? "/test" : ""}`;
exports.UPLOAD_FOLDER = `${exports.ASSETS_FOLDER}/upload`;
exports.MODULE_FOLDER = `${exports.ASSETS_FOLDER}/modules`;
exports.MODULE_IMG_FOLDER = `${exports.ASSETS_FOLDER}/module_imgs`;
exports.ACCESS_LOG_PATH = "./access.log";
exports.ERROR_LOG_PATH = "./error.log";
exports.EXCEPTION_LOG_PATH = "./exception.log";
//# sourceMappingURL=path.js.map