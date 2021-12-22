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
const httpCode_1 = require("../constants/httpCode");
const module_1 = require("../constants/responseMessage/module");
const module_2 = require("../models/module");
const requestMethod_1 = require("../types/requestMethod");
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = require("../constants/path");
class ModuleController {
}
exports.ModuleController = ModuleController;
ModuleController.getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const modules = yield module_2.Module.find();
    res.send(modules);
});
ModuleController.getInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const module = yield module_2.Module.findById(id);
    res.send(module);
});
ModuleController.getThumbnail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    res.sendFile(`${path_1.MODULE_IMG_FOLDER}/${id}.png`);
});
ModuleController.getHtml = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    res.sendFile(`${path_1.MODULE_FOLDER}/${id}.html`);
});
ModuleController.create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = module_2.validateInput(req.body, requestMethod_1.RequestMethod.POST);
    if (error)
        return res.status(httpCode_1.HTTP_CODE_BAD_REQUEST).send(error.details[0].message);
    let module = new module_2.Module(req.body);
    const existingModule = yield module_2.Module.findOne({ name: module.name });
    if (existingModule)
        return res.status(httpCode_1.HTTP_CODE_BAD_REQUEST).send(module_1.RES_MSG_MODULE_EXISTS);
    module = yield module.save();
    const thumnail = req.files["moduleThumbnail"];
    const html = req.files["moduleHtml"];
    if (thumnail) {
        fs_extra_1.default.moveSync(thumnail[0].path, `${path_1.MODULE_IMG_FOLDER}/${module._id}.png`);
    }
    if (html) {
        fs_extra_1.default.moveSync(html[0].path, `${path_1.MODULE_FOLDER}/${module._id}.html`);
    }
    return res.send(module);
});
ModuleController.delete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = module_2.validateInput(req.params, requestMethod_1.RequestMethod.GET);
    if (error)
        return res.status(httpCode_1.HTTP_CODE_BAD_REQUEST).send(error.details[0].message);
    yield module_2.Module.deleteMany({});
    return res.send("Done");
});
//# sourceMappingURL=module.js.map