"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
require("express-async-errors");
const component_1 = require("../controllers/component");
const router = express_1.Router();
router.get("/", component_1.ComponentController.getAll);
router.post("/", component_1.ComponentController.create);
exports.componentRouter = router;
//# sourceMappingURL=component copy.js.map