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
const component_1 = require("../constants/responseMessage/component");
const component_2 = require("../models/component");
const requestMethod_1 = require("../types/requestMethod");
class ComponentController {
}
exports.ComponentController = ComponentController;
ComponentController.getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const components = yield component_2.Component.find();
    res.send(components);
});
ComponentController.create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = component_2.validateInput(req.body, requestMethod_1.RequestMethod.POST);
    if (error)
        return res.status(httpCode_1.HTTP_CODE_BAD_REQUEST).send(error.details[0].message);
    let component = new component_2.Component(req.body);
    const existingComponent = yield component_2.Component.findOne({ name: component.name });
    if (existingComponent)
        return res.status(httpCode_1.HTTP_CODE_BAD_REQUEST).send(component_1.RES_MSG_COMPONENT_EXISTS);
    component = yield component.save();
    return res.send(component);
});
//# sourceMappingURL=component.js.map