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
exports.Message = void 0;
class Message {
    constructor(id, user_id, email, cellphone, subject, message) {
        this.id = id;
        this.user_id = user_id;
        this.email = email;
        this.cellphone = cellphone;
        this.subject = subject;
        this.message = message;
    }
    static create(id, user_id, email, cellphone, subject, message) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Message(id, user_id, email, cellphone, subject, message);
        });
    }
}
exports.Message = Message;
