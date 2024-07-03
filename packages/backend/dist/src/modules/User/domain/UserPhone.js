"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPhone = void 0;
const StringValueObject_1 = require("../../Shared/domain/StringValueObject");
const InvalidArgumentError_1 = require("../../Shared/domain/InvalidArgumentError");
class UserPhone extends StringValueObject_1.StringValueObject {
    constructor(value) {
        super(value);
        this.ensureIsValidPhone(value);
    }
    ensureIsValidPhone(value) {
        if (!/^\d{10}$/.test(value)) {
            console.log(value);
            throw new InvalidArgumentError_1.InvalidArgumentError(`The 'Phone' property: '${value}' must be a valid 'Phone'`);
        }
    }
}
exports.UserPhone = UserPhone;
