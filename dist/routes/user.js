"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controllers/user");
const auth_1 = require("../middlewares/auth");
require("express-async-errors");
const router = express_1.Router();
router.get("/", auth_1.authToken, auth_1.authRole, user_1.UserController.getAll);
router.get("/me", auth_1.authToken, user_1.UserController.getCurrentUser);
router.post("/", user_1.UserController.create);
router.put("/", auth_1.authToken, user_1.UserController.update);
router.delete("/:id", auth_1.authToken, auth_1.authRole, user_1.UserController.delete);
exports.userRouter = router;
//# sourceMappingURL=user.js.map