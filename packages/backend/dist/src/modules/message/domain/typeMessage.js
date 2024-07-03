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
var typeMessage_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeMessage = void 0;
require("reflect-metadata");
const tsyringe_1 = require("tsyringe");
const invalidContentLength_1 = require("./Error/invalidContentLength");
let typeMessage = typeMessage_1 = class typeMessage {
    constructor(content, encryptService) {
        this.encryptService = encryptService;
        this.Content = content;
        this.isValidContentLength(content);
        this.encryptMessage();
    }
    encryptMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            const encryptedMessage = yield this.encryptService.encrypt(this.Content);
            return new typeMessage_1(encryptedMessage, this.encryptService);
        });
    }
    decryptMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            const decryptedMessage = yield this.encryptService.decrypt(this.Content);
            return new typeMessage_1(decryptedMessage, this.encryptService);
        });
    }
    isValidContentLength(content) {
        if (content.length > 1000) {
            throw new invalidContentLength_1.invalidContentLength('The content exceeds 1000 characters');
        }
    }
};
exports.typeMessage = typeMessage;
exports.typeMessage = typeMessage = typeMessage_1 = __decorate([
    __param(1, (0, tsyringe_1.inject)('EncryptService')),
    __metadata("design:paramtypes", [String, Object])
], typeMessage);
