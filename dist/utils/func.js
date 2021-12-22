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
const fs_extra_1 = __importDefault(require("fs-extra"));
const make_dir_1 = __importDefault(require("make-dir"));
function parseStr(str, ...args) {
    var i = 0;
    return str.replace(/%s/g, () => args[i++]);
}
exports.parseStr = parseStr;
function subFoldersIn(folderPath) {
    const subFolders = fs_extra_1.default.readdirSync(folderPath).filter(e => fs_extra_1.default.lstatSync(`${folderPath}/${e}`).isDirectory());
    return subFolders;
}
exports.subFoldersIn = subFoldersIn;
function subFilesIn(folderPath, ext = "") {
    const subFiles = fs_extra_1.default.readdirSync(folderPath).filter(e => e.endsWith(ext));
    return subFiles;
}
exports.subFilesIn = subFilesIn;
function makeDirs(paths) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let path of paths)
            yield make_dir_1.default(path);
    });
}
exports.makeDirs = makeDirs;
//# sourceMappingURL=func.js.map