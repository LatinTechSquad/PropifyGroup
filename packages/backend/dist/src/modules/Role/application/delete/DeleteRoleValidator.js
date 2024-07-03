"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteRoleValidator = void 0;
const express_validator_1 = require("express-validator");
exports.DeleteRoleValidator = [
    (0, express_validator_1.param)('id').exists().withMessage("The 'id' field is required").isUUID().withMessage("The 'Id' field must be a valid Uuid").trim().escape(),
];
