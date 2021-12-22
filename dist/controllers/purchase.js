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
const purchase_1 = require("../constants/responseMessage/purchase");
const purchase_2 = require("../models/purchase");
const requestMethod_1 = require("../types/requestMethod");
class PurchaseController {
}
exports.PurchaseController = PurchaseController;
PurchaseController.getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.userId;
    const purchases = yield purchase_2.Purchase.find({ user: userId });
    res.send(purchases);
});
PurchaseController.create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = purchase_2.validateInput(req.body, requestMethod_1.RequestMethod.POST);
    if (error)
        return res.status(httpCode_1.HTTP_CODE_BAD_REQUEST).send(error.details[0].message);
    let purchase = new purchase_2.Purchase(req.body);
    const existingPurchase = yield purchase_2.Purchase.findOne({ user: purchase.user, module: purchase.module });
    if (existingPurchase)
        return res.status(httpCode_1.HTTP_CODE_BAD_REQUEST).send(purchase_1.RES_MSG_PURCHASE_EXISTS);
    purchase = yield purchase.save();
    return res.send(purchase);
});
PurchaseController.delete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = purchase_2.validateInput(req.params, requestMethod_1.RequestMethod.GET);
    if (error)
        return res.status(httpCode_1.HTTP_CODE_BAD_REQUEST).send(error.details[0].message);
    const purchase = yield purchase_2.Purchase.findByIdAndDelete(req.params.id);
    if (!purchase)
        return res.status(httpCode_1.HTTP_CODE_NOT_FOUND).send(purchase_1.RES_MSG_PURCHASE_NOT_FOUND);
    return res.send(purchase.toJSON());
});
//# sourceMappingURL=purchase.js.map