"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserId = void 0;
const Uuid_1 = require("../../Shared/infrastructure/services/Uuid");
class UserId extends Uuid_1.Uuid {
    constructor(value) {
        super(value);
        this.isValidUuid(value);
    }
}
exports.UserId = UserId;
