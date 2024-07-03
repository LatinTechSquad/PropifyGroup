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
exports.User = void 0;
const AggregateRoot_1 = require("../../Shared/domain/AggregateRoot");
class User extends AggregateRoot_1.AggregateRoot {
    constructor(id, firstname, lastname, email, hashedPassword, phone) {
        super();
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = hashedPassword;
        this.phone = phone;
    }
    static create(id, firstname, lastname, email, password, phone) {
        return __awaiter(this, void 0, void 0, function* () {
            return new User(id, firstname, lastname, email, password, phone);
        });
    }
    toPrimitives() {
        throw new Error('Method not implemented.');
    }
}
exports.User = User;
