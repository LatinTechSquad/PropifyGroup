"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.invalidArgumentErrorHandler = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ResponseBase_1 = require("../../application/ResponseBase");
const InvalidArgumentError_1 = require("../../domain/InvalidArgumentError");
function invalidArgumentErrorHandler(err, req, res, next) {
    if (err instanceof InvalidArgumentError_1.InvalidArgumentError) {
        const response = new ResponseBase_1.ResponseBase(false, http_status_1.default.BAD_REQUEST, http_status_1.default[400], err.message);
        res.status(http_status_1.default.BAD_REQUEST).json(response);
        return;
    }
    next(err);
}
exports.invalidArgumentErrorHandler = invalidArgumentErrorHandler;
