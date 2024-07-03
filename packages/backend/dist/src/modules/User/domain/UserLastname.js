"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLastname = void 0;
const StringValueObject_1 = require("../../Shared/domain/StringValueObject");
const InvalidArgumentError_1 = require("../../Shared/domain/InvalidArgumentError");
class UserLastname extends StringValueObject_1.StringValueObject {
    constructor(value) {
        super(value);
        this.ensureIsValidLastname(value);
    }
    ensureIsValidLastname(value) {
        if (value.length > 50 || value.length < 2) {
            throw new InvalidArgumentError_1.InvalidArgumentError(`The 'Lastname' property: '${value}' must be between 2 and 50 characters`);
        }
        if (!/^[A-Za-záéíóúüÜñÑ\s]+$/u.test(value)) {
            throw new InvalidArgumentError_1.InvalidArgumentError(`The 'Lastname' property: '${value}' can only contain alphabetical characters, spaces, and accents.`);
        }
    }
}
exports.UserLastname = UserLastname;
