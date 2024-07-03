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
exports.CreateUserUseCase = void 0;
require("reflect-metadata");
const tsyringe_1 = require("tsyringe");
const UserIdAlreadyExistError_1 = require("../../domain/errors/UserIdAlreadyExistError");
const UserEmailAlreadyExistError_1 = require("../../domain/errors/UserEmailAlreadyExistError");
const ExistUserByEmail_1 = require("../../domain/services/ExistUserByEmail");
const ExistUserById_1 = require("../../domain/services/ExistUserById");
const User_1 = require("../../domain/User");
const UserId_1 = require("../../domain/UserId");
const UserFirstname_1 = require("../../domain/UserFirstname");
const UserLastname_1 = require("../../domain/UserLastname");
const UserEmail_1 = require("../../domain/UserEmail");
const UserPassword_1 = require("../../domain/UserPassword");
const UserPhone_1 = require("../../domain/UserPhone");
const userContainer_1 = require("../../userContainer");
let CreateUserUseCase = class CreateUserUseCase {
    constructor(repository, checkByEmail, checkById) {
        this._repository = repository;
        this.checkByEmail = checkByEmail;
        this.checkById = checkById;
    }
    run(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const checkUserByEmail = yield this.checkByEmail.check(req.email);
            if (checkUserByEmail)
                throw new UserEmailAlreadyExistError_1.UserEmailAlreadyExistError();
            const checkUserById = yield this.checkById.check(req.id);
            if (checkUserById)
                throw new UserIdAlreadyExistError_1.UserIdAlreadyExistError();
            const user = yield User_1.User.create(new UserId_1.UserId(req.id), new UserFirstname_1.UserFirstname(req.firstname), new UserLastname_1.UserLastname(req.lastname), new UserEmail_1.UserEmail(req.email), yield new UserPassword_1.UserPassword(req.password, userContainer_1.userContainer.resolve('HashService')).validate(), new UserPhone_1.UserPhone(req.phone));
            yield this._repository.create(user);
        });
    }
};
exports.CreateUserUseCase = CreateUserUseCase;
exports.CreateUserUseCase = CreateUserUseCase = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)('UserRepository')),
    __param(1, (0, tsyringe_1.inject)('ExistUserByEmail')),
    __param(2, (0, tsyringe_1.inject)('ExistUserById')),
    __metadata("design:paramtypes", [Object, ExistUserByEmail_1.ExistUserByEmail,
        ExistUserById_1.ExistUserById])
], CreateUserUseCase);
