"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Uuid = void 0;
const uuid_1 = require("uuid");
const InvalidArgumentError_1 = require("../../domain/InvalidArgumentError");
class Uuid {
    constructor(value) {
        this.isValidUuid(value);
        this.value = value;
    }
    generate() {
        return (0, uuid_1.v4)();
    }
    isValidUuid(uuid) {
        if (!(0, uuid_1.validate)(uuid)) {
            throw new InvalidArgumentError_1.InvalidArgumentError(`The 'Id' property: '${uuid}' must be a valid 'Uuid'`);
        }
    }
}
exports.Uuid = Uuid;
