"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
require("express-async-errors");
const robotApi_1 = require("../controllers/robotApi");
const router = express_1.Router();
router.get("/", robotApi_1.RobotApiController.getAll);
router.post("/", robotApi_1.RobotApiController.create);
exports.robotApiRouter = router;
//# sourceMappingURL=robotApi.js.map