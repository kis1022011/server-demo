"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = require("../constants/path");
const func_1 = require("../utils/func");
exports.upload = (destination) => {
    const storage = multer_1.default.diskStorage({
        destination: (req, file, cb) => __awaiter(void 0, void 0, void 0, function* () {
            yield func_1.makeDirs([
                path_1.ASSETS_FOLDER,
                path_1.UPLOAD_FOLDER,
                path_1.MODULE_FOLDER,
            ]);
            cb(null, destination);
        }),
        filename: (req, file, cb) => {
            cb(null, `${Date.now()}_${file.originalname}`);
        }
    });
    return multer_1.default({ storage: storage });
};
//# sourceMappingURL=upload.js.map