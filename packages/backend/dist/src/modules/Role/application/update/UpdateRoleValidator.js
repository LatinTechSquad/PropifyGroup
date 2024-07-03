"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRoleValidator = void 0;
const express_validator_1 = require("express-validator");
exports.UpdateRoleValidator = [
    (0, express_validator_1.param)('id').exists().withMessage("The 'id' field is required").isUUID().withMessage("The 'Id' field must be a valid Uuid").trim().escape(),
    (0, express_validator_1.body)('roleName')
        .exists()
        .withMessage("The 'roleName' field is required")
        .isString()
        .withMessage("The 'roleName' field must be a valid string")
        .trim()
        .escape(),
    (0, express_validator_1.body)('roleState')
        .exists()
        .withMessage("The 'roleState' field is required")
        .isString()
        .withMessage("The 'roleState' field must be a valid string")
        .trim()
        .escape(),
];
