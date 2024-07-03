"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEmail = void 0;
const InvalidArgumentError_1 = require("../../Shared/domain/InvalidArgumentError");
const StringValueObject_1 = require("../../Shared/domain/StringValueObject");
class UserEmail extends StringValueObject_1.StringValueObject {
    constructor(value) {
        super(value);
        this.ensureIsValidEmail(value);
    }
    ensureIsValidEmail(value) {
        if (!/^[a-zA-Z0-9._-]{3,}@(?!.*\.\.)[a-zA-Z0-9.-]{3,}\.[a-zA-Z]{2,}$/.test(value)) {
            throw new InvalidArgumentError_1.InvalidArgumentError(`The 'Email' property: '${value}' must be a valid 'Email'`);
        }
    }
}
exports.UserEmail = UserEmail;
