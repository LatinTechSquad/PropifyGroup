"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateReqSchema = void 0;
const express_validator_1 = require("express-validator");
const http_status_1 = __importDefault(require("http-status"));
const ResponseBase_1 = require("../../application/ResponseBase");
function validateReqSchema(req, res, next) {
    const validationsErrors = (0, express_validator_1.validationResult)(req);
    if (validationsErrors.isEmpty()) {
        next();
        return;
    }
    const errors = validationsErrors.array().map((err) => err.msg);
    const response = new ResponseBase_1.ResponseBase(false, http_status_1.default.UNPROCESSABLE_ENTITY, http_status_1.default[422], 'Error validating registration data', undefined, errors);
    res.status(http_status_1.default.UNPROCESSABLE_ENTITY).json(response);
}
exports.validateReqSchema = validateReqSchema;
