"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
require("express-async-errors");
const auth_1 = require("../middlewares/auth");
const router = express_1.Router();
router.get("/", auth_1.authToken, ArtboardController.getAll);
router.get("/in-page/:id", auth_1.authToken, ArtboardController.getByPageId);
exports.artboardRouter = router;
//# sourceMappingURL=artboard.js.map