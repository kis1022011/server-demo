"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const joi_1 = require("../utils/joi");
const paramSchema = {
    name: {
        type: String
    },
};
const robotApiSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    props: [paramSchema]
});
function validateInput(input, requestMethod) {
    var schema;
    const defaultSchema = {
        id: joi_1.Joi
            .objectId()
            .required()
    };
    schema = defaultSchema;
    return joi_1.Joi.object(schema).validate(input);
}
exports.validateInput = validateInput;
exports.RobotApi = mongoose_1.default.model("robot_api", robotApiSchema);
//# sourceMappingURL=robotApi copy.js.map