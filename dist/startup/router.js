"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_1 = require("../middlewares/error");
const module_1 = require("../routes/module");
exports.API_ROUTE_MODULE = "/api/module";
exports.registerRoutes = (app) => {
    app.use(exports.API_ROUTE_MODULE, module_1.moduleRouter);
    app.use(error_1.error);
};
//# sourceMappingURL=router.js.map