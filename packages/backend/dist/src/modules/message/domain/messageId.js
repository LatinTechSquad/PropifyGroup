"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageId = void 0;
const Uuid_1 = require("src/modules/Shared/infrastructure/services/Uuid");
class MessageId extends Uuid_1.Uuid {
    constructor(value) {
        super(value);
        this.isValidUuid(value);
    }
}
exports.MessageId = MessageId;
