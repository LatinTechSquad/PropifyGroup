"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleState = void 0;
const InvalidArgumentError_1 = require("../../Shared/domain/InvalidArgumentError");
const StringValueObject_1 = require("../../Shared/domain/StringValueObject");
class RoleState extends StringValueObject_1.StringValueObject {
    constructor(value) {
        super(value);
        this.ensureIsValidRoleState(value);
    }
    ensureIsValidRoleState(value) {
        if (!['Active', 'Inactive'].includes(value)) {
            throw new InvalidArgumentError_1.InvalidArgumentError(`The 'RoleState' property: '${value}' must be either 'Active' or 'Inactive'`);
        }
    }
}
exports.RoleState = RoleState;
