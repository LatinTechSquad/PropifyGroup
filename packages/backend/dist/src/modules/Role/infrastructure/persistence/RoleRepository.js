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
exports.RoleRepository = void 0;
const Role_1 = require("../../domain/Role");
const client_1 = require("@prisma/client");
require("reflect-metadata");
const tsyringe_1 = require("tsyringe");
const RoleId_1 = require("../../domain/RoleId");
const RoleName_1 = require("../../domain/RoleName");
const RoleState_1 = require("../../domain/RoleState");
let RoleRepository = class RoleRepository {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    create(roleData) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.prisma.role.create({
                data: {
                    id: roleData.id.value,
                    role_name: roleData.roleName.toString(),
                    role_state: roleData.roleState.toString(),
                },
            });
        });
    }
    update(roleData) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.prisma.role.update({
                where: { id: roleData.id.value },
                data: {
                    role_name: roleData.roleName.toString(),
                    role_state: roleData.roleState.toString(),
                },
            });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.prisma.role.delete({ where: { id } });
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const roleData = yield this.prisma.role.findUnique({ where: { id } });
            return roleData ? new Role_1.Role(new RoleId_1.RoleId(roleData.id), new RoleName_1.RoleName(roleData.role_name), new RoleState_1.RoleState(roleData.role_state)) : null;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const rolesData = yield this.prisma.role.findMany();
            return rolesData.map((role) => new Role_1.Role(new RoleId_1.RoleId(role.id), new RoleName_1.RoleName(role.role_name), new RoleState_1.RoleState(role.role_state)));
        });
    }
};
exports.RoleRepository = RoleRepository;
exports.RoleRepository = RoleRepository = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [])
], RoleRepository);
