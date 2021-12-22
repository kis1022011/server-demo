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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = require("../utils/joi");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const lodash_1 = __importDefault(require("lodash"));
const mongoose_1 = __importStar(require("mongoose"));
const getter_1 = require("../utils/getter");
const bcrypt_1 = __importDefault(require("bcrypt"));
const requestMethod_1 = require("../types/requestMethod");
const userSchema = new mongoose_1.Schema({
    loginId: {
        type: String,
        unique: true,
        required: true,
        match: /^[a-z0-9]+$/,
        trim: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    password: {
        type: String,
        required: true,
    },
});
userSchema.methods.generateAuthToken = function () {
    var payload = lodash_1.default.omit(this.toJSON(), ["password"]);
    return jsonwebtoken_1.default.sign(payload, getter_1.getConfig().jwtSecret);
};
function validateInput(input, requestMethod) {
    var schema;
    const defaultSchema = {
        loginId: joi_1.Joi
            .string()
            .regex(/^[a-z0-9]+$/)
            .required()
            .trim(),
        name: joi_1.Joi
            .string()
            .required()
            .trim(),
        isAdmin: joi_1.Joi
            .boolean(),
        password: joi_1.Joi
            .string()
            .required()
    };
    schema = defaultSchema;
    if (requestMethod === requestMethod_1.RequestMethod.GET ||
        requestMethod === requestMethod_1.RequestMethod.DELETE) {
        schema = {
            id: joi_1.Joi
                .objectId()
                .required()
        };
    }
    if (requestMethod === requestMethod_1.RequestMethod.PUT) {
        delete schema.loginId;
        delete schema.isAdmin;
    }
    return joi_1.Joi.object(schema).validate(input);
}
exports.validateInput = validateInput;
function encodePassword(password) {
    return __awaiter(this, void 0, void 0, function* () {
        const salt = yield bcrypt_1.default.genSalt(10);
        return bcrypt_1.default.hash(password, salt);
    });
}
exports.encodePassword = encodePassword;
exports.User = mongoose_1.default.model("user", userSchema);
//# sourceMappingURL=user.js.map