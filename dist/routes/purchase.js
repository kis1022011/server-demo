"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
require("express-async-errors");
const purchase_1 = require("../controllers/purchase");
const router = express_1.Router();
router.get("/:userId", purchase_1.PurchaseController.getAll);
router.post("/", purchase_1.PurchaseController.create);
router.delete("/:id", purchase_1.PurchaseController.delete);
exports.purchaseRouter = router;
//# sourceMappingURL=purchase.js.map