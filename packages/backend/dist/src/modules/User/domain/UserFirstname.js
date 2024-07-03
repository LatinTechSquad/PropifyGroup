"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFirstname = void 0;
const InvalidArgumentError_1 = require("../../Shared/domain/InvalidArgumentError");
const StringValueObject_1 = require("../../Shared/domain/StringValueObject");
class UserFirstname extends StringValueObject_1.StringValueObject {
    constructor(value) {
        super(value);
        this.ensureIsValidFirstname(value);
    }
    ensureIsValidFirstname(value) {
        if (value.length > 50 || value.length < 2) {
            throw new InvalidArgumentError_1.InvalidArgumentError(`The 'Firstname' property: '${value}' must be between 2 and 50 characters`);
        }
        if (!/^[A-Za-záéíóúüÜñÑ\s]+$/u.test(value)) {
            throw new InvalidArgumentError_1.InvalidArgumentError(`The 'Firstname' property: '${value}' can only contain alphabetical characters, spaces, and accents.`);
        }
    }
}
exports.UserFirstname = UserFirstname;
