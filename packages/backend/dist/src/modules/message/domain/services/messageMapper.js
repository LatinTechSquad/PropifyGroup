"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTypeMessageFromData = void 0;
const UserEmail_1 = require("src/modules/User/domain/UserEmail");
const UserPhone_1 = require("src/modules/User/domain/UserPhone");
const typeSubject_1 = require("../../domain/typeSubject");
const typeMessage_1 = require("../../domain/typeMessage");
const messageId_1 = require("../../domain/messageId");
const message_1 = require("../../domain/message");
const tsyringe_1 = require("tsyringe");
function createTypeMessageFromData(messageData) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        const email = new UserEmail_1.UserEmail((_a = messageData.email) !== null && _a !== void 0 ? _a : '');
        const cellPhone = new UserPhone_1.UserPhone((_b = messageData.cell_phone) !== null && _b !== void 0 ? _b : '');
        const subject = new typeSubject_1.typeSubject((_c = messageData.subjet) !== null && _c !== void 0 ? _c : '');
        let decryptedMessage;
        if (messageData.message) {
            try {
                decryptedMessage = yield new typeMessage_1.typeMessage(messageData.message, tsyringe_1.container.resolve('EncryptService')).decryptMessage();
            }
            catch (error) {
                decryptedMessage = new typeMessage_1.typeMessage('Encrypted Message', tsyringe_1.container.resolve('EncryptService'));
            }
        }
        else {
            decryptedMessage = new typeMessage_1.typeMessage(' ', tsyringe_1.container.resolve('EncryptService'));
        }
        return new message_1.Message(new messageId_1.MessageId(messageData.id), messageData.user_id, email, cellPhone, subject, decryptedMessage);
    });
}
exports.createTypeMessageFromData = createTypeMessageFromData;
