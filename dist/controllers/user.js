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
const lodash_1 = __importDefault(require("lodash"));
const httpCode_1 = require("../constants/httpCode");
const user_1 = require("../constants/responseMessage/user");
const user_2 = require("../models/user");
const getter_1 = require("../utils/getter");
const requestMethod_1 = require("../types/requestMethod");
class UserController {
}
exports.UserController = UserController;
UserController.getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_2.User.find().select("-password");
    res.send(users);
});
UserController.getCurrentUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_2.User.findById({ _id: getter_1.getPayload(req)._id }).select("-password");
    res.send(user);
});
UserController.create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const { error } = user_2.validateInput(req.body, requestMethod_1.RequestMethod.POST);
    if (error)
        return res.status(httpCode_1.HTTP_CODE_BAD_REQUEST).send(error.details[0].message);
    let user = new user_2.User(req.body);
    const existingUser = yield user_2.User.findOne({ account: user.loginId });
    if (existingUser)
        return res.status(httpCode_1.HTTP_CODE_BAD_REQUEST).send(user_1.RES_MSG_USER_ACCOUNT_EXISTS);
    user.password = yield user_2.encodePassword(user.password);
    user = yield user.save();
    return res.send(lodash_1.default.omit(user.toJSON(), ["password"]));
});
UserController.update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = user_2.validateInput(req.body, requestMethod_1.RequestMethod.PUT);
    if (error)
        return res.status(httpCode_1.HTTP_CODE_BAD_REQUEST).send(error.details[0].message);
    const newUser = req.body;
    if (req.body.password) {
        newUser.password = yield user_2.encodePassword(newUser.password);
    }
    const user = yield user_2.User.findByIdAndUpdate(getter_1.getPayload(req)._id, newUser, { new: true });
    if (!user)
        return res.status(httpCode_1.HTTP_CODE_NOT_FOUND).send(user_1.RES_MSG_USER_NOT_FOUND);
    return res.send(lodash_1.default.omit(user.toJSON(), ["password"]));
});
UserController.delete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = user_2.validateInput(req.params, requestMethod_1.RequestMethod.DELETE);
    if (error)
        return res.status(httpCode_1.HTTP_CODE_BAD_REQUEST).send(error.details[0].message);
    const user = yield user_2.User.findByIdAndDelete(req.params.id);
    if (!user)
        return res.status(httpCode_1.HTTP_CODE_NOT_FOUND).send(user_1.RES_MSG_USER_NOT_FOUND);
    return res.send(lodash_1.default.omit(user.toJSON(), ["password"]));
});
//# sourceMappingURL=user.js.map