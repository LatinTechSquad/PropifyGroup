"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMessageValidator = void 0;
const express_validator_1 = require("express-validator");
exports.CreateMessageValidator = [
    (0, express_validator_1.body)('email')
        .exists()
        .withMessage("The 'Email' field is required")
        .isEmail()
        .withMessage("The 'Email' field must be a valid email")
        .trim()
        .escape(),
    (0, express_validator_1.body)('phone')
        .exists()
        .withMessage("The 'Phone' field is required")
        .isString()
        .withMessage("The 'Phone' field must be a valid number")
        .trim()
        .escape(),
    (0, express_validator_1.body)('subject')
        .exists()
        .withMessage("The 'Subject' field is required")
        .isString()
        .withMessage("The 'Subject' field must be a valid string")
        .trim()
        .isLength({ max: 250 })
        .withMessage('The content exceeds 1000 characters')
        .escape(),
    (0, express_validator_1.body)('message')
        .exists()
        .withMessage("The 'Message' field is required")
        .isString()
        .withMessage("The 'Message' field must be a valid string")
        .trim()
        .isLength({ max: 1000 })
        .withMessage('The content exceeds 1000 characters')
        .escape(),
];
