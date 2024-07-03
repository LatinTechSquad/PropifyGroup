"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeSubject = void 0;
const invalidContentLength_1 = require("./Error/invalidContentLength");
class typeSubject {
    constructor(content) {
        if (!this.isValidSubjectLength(content)) {
            throw new invalidContentLength_1.invalidContentLength('The content exceeds 250 characters');
        }
    }
    isValidSubjectLength(content) {
        return content.length <= 250;
    }
}
exports.typeSubject = typeSubject;
