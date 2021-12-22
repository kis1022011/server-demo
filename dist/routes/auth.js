"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../controllers/auth");
require("express-async-errors");
const router = express_1.Router();
router.post("/", auth_1.AuthController.authLogin);
exports.authRouter = router;
//# sourceMappingURL=auth.js.map