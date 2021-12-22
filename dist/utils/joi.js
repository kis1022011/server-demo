"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("@hapi/joi"));
joi_1.default.objectId = require('joi-objectid')(joi_1.default);
exports.Joi = joi_1.default;
//# sourceMappingURL=joi.js.map