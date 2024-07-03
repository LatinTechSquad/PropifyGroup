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
exports.UserRepository = void 0;
const User_1 = require("../../domain/User");
const client_1 = require("@prisma/client");
require("reflect-metadata");
const tsyringe_1 = require("tsyringe");
const UserEmail_1 = require("../../domain/UserEmail");
const UserFirstname_1 = require("../../domain/UserFirstname");
const UserId_1 = require("../../domain/UserId");
const UserLastname_1 = require("../../domain/UserLastname");
const UserPassword_1 = require("../../domain/UserPassword");
const UserPhone_1 = require("../../domain/UserPhone");
let UserRepository = class UserRepository {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    create(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.prisma.user.create({
                data: {
                    id: userData.id.value,
                    firstname: userData.firstname.toString(),
                    lastname: userData.lastname.toString(),
                    email: userData.email.toString(),
                    password: userData.password.toString(),
                    cell_phone: userData.phone.toString(),
                    role_id: '38d436a9-f512-4e95-b871-553bab740e7a',
                },
            });
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const userData = yield this.prisma.user.findUnique({ where: { id } });
            return userData
                ? new User_1.User(new UserId_1.UserId(userData.id), new UserFirstname_1.UserFirstname(userData.firstname), new UserLastname_1.UserLastname(userData.lastname), new UserEmail_1.UserEmail(userData.email), new UserPassword_1.UserPassword(userData.password, tsyringe_1.container.resolve('HashService')), new UserPhone_1.UserPhone(userData.cell_phone))
                : null;
        });
    }
    getByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const userData = yield this.prisma.user.findUnique({ where: { email } });
            return userData
                ? new User_1.User(new UserId_1.UserId(userData.id), new UserFirstname_1.UserFirstname(userData.firstname), new UserLastname_1.UserLastname(userData.lastname), new UserEmail_1.UserEmail(userData.email), new UserPassword_1.UserPassword(userData.password, tsyringe_1.container.resolve('HashService')), new UserPhone_1.UserPhone(userData.cell_phone))
                : null;
        });
    }
};
exports.UserRepository = UserRepository;
exports.UserRepository = UserRepository = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [])
], UserRepository);
