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
var UserPassword_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPassword = void 0;
require("reflect-metadata");
const tsyringe_1 = require("tsyringe");
const InvalidArgumentError_1 = require("../../Shared/domain/InvalidArgumentError");
const StringValueObject_1 = require("../../Shared/domain/StringValueObject");
let UserPassword = UserPassword_1 = class UserPassword extends StringValueObject_1.StringValueObject {
    constructor(value, hashService) {
        super(value);
        this.hashService = hashService;
        this.ensureLengthIsBetween8And100Characters(value);
        this.validate();
    }
    validate() {
        return __awaiter(this, void 0, void 0, function* () {
            const hashedValue = yield this.hashService.hash(this.getValue());
            this.setValue(hashedValue);
            return this;
        });
    }
    ensureLengthIsBetween8And100Characters(value) {
        if (value.length < 8 || value.length > 100) {
            throw new InvalidArgumentError_1.InvalidArgumentError(`The 'Password' property: '${value}' must be between 8 and 100 characters`);
        }
    }
    static createAndHash(value, hashService) {
        return __awaiter(this, void 0, void 0, function* () {
            const userPassword = new UserPassword_1(value, hashService);
            yield userPassword.validate();
            return userPassword;
        });
    }
};
exports.UserPassword = UserPassword;
exports.UserPassword = UserPassword = UserPassword_1 = __decorate([
    __param(1, (0, tsyringe_1.inject)('HashService')),
    __metadata("design:paramtypes", [String, Object])
], UserPassword);
