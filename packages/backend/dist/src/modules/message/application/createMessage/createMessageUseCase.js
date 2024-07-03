"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.CreateMessageUseCase = void 0;
const message_1 = require("../../domain/message");
const tsyringe_1 = require("tsyringe");
const messageId_1 = require("../../domain/messageId");
const UserEmail_1 = require("src/modules/User/domain/UserEmail");
const UserPhone_1 = require("src/modules/User/domain/UserPhone");
const typeSubject_1 = require("../../domain/typeSubject");
const typeMessage_1 = require("../../domain/typeMessage");
const messageContainer_1 = require("../../messageContainer");
let CreateMessageUseCase = class CreateMessageUseCase {
    constructor(messageRepository) {
        this._MessageRepository = messageRepository;
    }
    run(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const newMessage = yield message_1.Message.create(new messageId_1.MessageId(body.id), body.user_id, new UserEmail_1.UserEmail(body.email), new UserPhone_1.UserPhone(body.phone), new typeSubject_1.typeSubject(body.subject), yield new typeMessage_1.typeMessage(body.message, messageContainer_1.messageContainer.resolve('EncryptService')).encryptMessage());
            yield this._MessageRepository.createMessage(newMessage);
        });
    }
};
exports.CreateMessageUseCase = CreateMessageUseCase;
exports.CreateMessageUseCase = CreateMessageUseCase = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)('messageRepository')),
    __metadata("design:paramtypes", [Object])
], CreateMessageUseCase);
