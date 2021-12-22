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
const artboardSchema = new mongoose_1.Schema({
    artboardId: {
        type: String,
        required: true,
        match: /[A-F0-9]{8}-[A-F0-9]{4}-[A-F0-9]{4}-[A-F0-9]{4}-[A-F0-9]{12}/,
    },
    name: {
        type: String,
        required: true,
    },
    page: {
        type: mongoose_1.default.Types.ObjectId,
        ref: "page"
    }
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
exports.Artboard = mongoose_1.default.model("artboard", artboardSchema);
//# sourceMappingURL=components.js.map