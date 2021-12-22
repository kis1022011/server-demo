"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
require("express-async-errors");
const path_1 = require("../constants/path");
const module_1 = require("../controllers/module");
const upload_1 = require("../middlewares/upload");
const router = express_1.Router();
router.get("/", module_1.ModuleController.getAll);
router.get("/:id", module_1.ModuleController.getInfo);
router.get("/thumbnail/:id", module_1.ModuleController.getThumbnail);
router.get("/html/:id", module_1.ModuleController.getHtml);
router.post("/", upload_1.upload(path_1.UPLOAD_FOLDER).fields([{
        name: 'moduleThumbnail', maxCount: 1
    }, {
        name: 'moduleHtml', maxCount: 1
    }]), module_1.ModuleController.create);
router.delete("/", module_1.ModuleController.delete);
exports.moduleRouter = router;
//# sourceMappingURL=module.js.map