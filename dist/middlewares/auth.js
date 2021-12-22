"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const httpCode_1 = require("../constants/httpCode");
const auth_1 = require("../constants/responseMessage/auth");
const getter_1 = require("../utils/getter");
exports.AUTH_TOKEN_HEADER = "x-auth-token";
function authToken(req, res, next) {
    const token = req.header(exports.AUTH_TOKEN_HEADER);
    if (!token) {
        res.status(httpCode_1.HTTP_CODE_UNAUTHORIZED).send(auth_1.RES_MSG_AUTH_NO_TOKEN);
        return;
    }
    try {
        const user = jsonwebtoken_1.default.verify(token, getter_1.getConfig().jwtSecret);
        req.user = user;
        next();
    }
    catch (err) {
        res.status(httpCode_1.HTTP_CODE_BAD_REQUEST).send(auth_1.RES_MSG_AUTH_INVALID_TOKEN);
    }
}
exports.authToken = authToken;
function authRole(req, res, next) {
    const user = getter_1.getPayload(req);
    if (!user.isAdmin)
        return res.status(httpCode_1.HTTP_CODE_FORBIDDEN).send(auth_1.RES_MSG_AUTH_ACCESS_DENIED);
    return next();
}
exports.authRole = authRole;
//# sourceMappingURL=auth.js.map