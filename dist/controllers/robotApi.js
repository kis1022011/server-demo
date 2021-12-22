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
const robotApi_1 = require("../constants/responseMessage/robotApi");
const robotApi_2 = require("../models/robotApi");
const requestMethod_1 = require("../types/requestMethod");
class RobotApiController {
}
exports.RobotApiController = RobotApiController;
RobotApiController.getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const robotApis = yield robotApi_2.RobotApi.find();
    res.send(robotApis);
});
RobotApiController.create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = robotApi_2.validateInput(req.body, requestMethod_1.RequestMethod.POST);
    if (error)
        return res.status(httpCode_1.HTTP_CODE_BAD_REQUEST).send(error.details[0].message);
    let robotApi = new robotApi_2.RobotApi(req.body);
    const existingRobotApi = yield robotApi_2.RobotApi.findOne({ endpoint: robotApi.endpoint });
    if (existingRobotApi)
        return res.status(httpCode_1.HTTP_CODE_BAD_REQUEST).send(robotApi_1.RES_MSG_ROBOT_API_EXISTS);
    robotApi = yield robotApi.save();
    return res.send(robotApi);
});
//# sourceMappingURL=robotApi.js.map