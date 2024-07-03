"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserValidator = void 0;
const express_validator_1 = require("express-validator");
exports.CreateUserValidator = [
    (0, express_validator_1.body)('id').exists().withMessage("The 'id' field is required").isUUID().withMessage("The 'Id' field must be a valid Uuid").trim().escape(),
    (0, express_validator_1.body)('firstname')
        .exists()
        .withMessage("The 'Firstname' field is required")
        .isString()
        .withMessage("The 'Firstname' field must be a valid string")
        .trim()
        .escape(),
    (0, express_validator_1.body)('lastname')
        .exists()
        .withMessage("The 'Lastname' field is required")
        .isString()
        .withMessage("The 'Lastname' field must be a valid string")
        .trim()
        .escape(),
    (0, express_validator_1.body)('email')
        .exists()
        .withMessage("The 'Email' field is required")
        .isString()
        .withMessage("The 'Email' field must be a valid string")
        .trim()
        .escape(),
    (0, express_validator_1.body)('password')
        .exists()
        .withMessage("The 'password' field is required")
        .isString()
        .withMessage("The 'password' field must be a valid string")
        .trim()
        .escape(),
    (0, express_validator_1.body)('phone')
        .exists()
        .withMessage("The 'Phone' field is required")
        .isString()
        .withMessage("The 'Phone' field must be a valid number")
        .trim()
        .escape(),
];
