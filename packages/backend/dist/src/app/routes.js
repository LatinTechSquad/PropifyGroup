"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const invalidArgumentErrorHandler_1 = require("../modules/Shared/infrastructure/api/invalidArgumentErrorHandler");
const userRoutes_1 = __importDefault(require("../modules/User/infrastructure/api/userRoutes"));
const authRoutes_1 = __importDefault(require("../modules/Auth/infrastructure/api/authRoutes"));
const roleRoutes_1 = __importDefault(require("../modules/Role/infrastructure/api/roleRoutes"));
const router = (0, express_1.Router)();
router.use('/users', userRoutes_1.default);
router.use('/auth', authRoutes_1.default);
router.use('/roles', roleRoutes_1.default);
router.use(invalidArgumentErrorHandler_1.invalidArgumentErrorHandler);
router.use((err, req, res, next) => {
    console.log(err);
    res.status(500).end();
    next();
});
exports.default = router;
