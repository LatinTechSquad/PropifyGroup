"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleId = void 0;
const Uuid_1 = require("../../Shared/infrastructure/services/Uuid");
class RoleId extends Uuid_1.Uuid {
    constructor(value) {
        super(value);
        this.isValidUuid(value);
    }
}
exports.RoleId = RoleId;
