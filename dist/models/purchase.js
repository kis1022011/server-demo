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
const purchaseSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.default.Types.ObjectId,
        ref: "user"
    },
    module: {
        type: mongoose_1.default.Types.ObjectId,
        ref: "module"
    }
});
function validateInput(input, requestMethod) {
    return { error: null };
    var schema;
    const defaultSchema = {
        user: joi_1.Joi
            .objectId()
            .required(),
        module: joi_1.Joi
            .objectId()
            .required()
    };
    schema = defaultSchema;
    return joi_1.Joi.object(schema).validate(input);
}
exports.validateInput = validateInput;
exports.Purchase = mongoose_1.default.model("purchase", purchaseSchema);
//# sourceMappingURL=purchase.js.map