"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidator = void 0;
const express_validator_1 = require("express-validator");
exports.loginValidator = [
    (0, express_validator_1.body)('email').exists().withMessage("The 'Email' field is required").trim().escape(),
    (0, express_validator_1.body)('password').exists().withMessage("The 'Password' field is required").trim().escape(),
];
