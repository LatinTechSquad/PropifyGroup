"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleName = void 0;
const InvalidArgumentError_1 = require("../../Shared/domain/InvalidArgumentError");
const StringValueObject_1 = require("../../Shared/domain/StringValueObject");
class RoleName extends StringValueObject_1.StringValueObject {
    constructor(value) {
        super(value);
        this.ensureIsValidRoleName(value);
    }
    ensureIsValidRoleName(value) {
        if (value.length > 50 || value.length < 2) {
            throw new InvalidArgumentError_1.InvalidArgumentError(`The 'RoleName' property: '${value}' must be between 2 and 50 characters`);
        }
        if (!/^[A-Za-záéíóúüÜñÑ\s]+$/u.test(value)) {
            throw new InvalidArgumentError_1.InvalidArgumentError(`The 'RoleName' property: '${value}' can only contain alphabetical characters, spaces, and accents.`);
        }
    }
}
exports.RoleName = RoleName;
