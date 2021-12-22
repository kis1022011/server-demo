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
Object.defineProperty(exports, "__esModule", { value: true });
const httpCode_1 = require("../constants/httpCode");
const artboard_1 = require("../models/artboard");
const requestMethod_1 = require("../types/requestMethod");
class ArtboardController {
}
exports.ArtboardController = ArtboardController;
ArtboardController.getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const artboards = yield artboard_1.Artboard.find();
    res.send(artboards);
});
ArtboardController.getByPageId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = artboard_1.validateInput(req.params, requestMethod_1.RequestMethod.GET);
    if (error)
        return res.status(httpCode_1.HTTP_CODE_BAD_REQUEST).send(error.details[0].message);
    const pageId = req.params.id;
    const artboards = yield artboard_1.Artboard.find({ page: pageId });
    return res.send(artboards);
});
//# sourceMappingURL=artboard.js.map