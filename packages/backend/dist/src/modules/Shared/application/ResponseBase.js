"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseBase = void 0;
class ResponseBase {
    constructor(succesed, code, status_code, message, data, errors) {
        this.succesed = succesed;
        this.code = code;
        this.status_code = status_code;
        this.message = message;
        this.errors = errors;
        this.data = data;
    }
}
exports.ResponseBase = ResponseBase;
