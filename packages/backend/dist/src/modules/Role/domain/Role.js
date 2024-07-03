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
exports.Role = void 0;
const AggregateRoot_1 = require("../../Shared/domain/AggregateRoot");
const RoleId_1 = require("./RoleId");
const RoleName_1 = require("./RoleName");
const RoleState_1 = require("./RoleState");
class Role extends AggregateRoot_1.AggregateRoot {
    constructor(id, roleName, roleState) {
        super();
        this.id = id;
        this.roleName = roleName;
        this.roleState = roleState;
    }
    static create(id, roleName, roleStatus) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Role(id, roleName, roleStatus);
        });
    }
    updateFields(roleName, roleState) {
        return __awaiter(this, void 0, void 0, function* () {
            this.roleName = roleName;
            this.roleState = roleState;
        });
    }
    toPrimitives() {
        return {
            id: this.id.value,
            roleName: this.roleName.getValue(),
            roleState: this.roleState.getValue(),
        };
    }
    static fromPrimitives(data) {
        return new Role(new RoleId_1.RoleId(data.id), new RoleName_1.RoleName(data.roleName), new RoleState_1.RoleState(data.roleState));
    }
}
exports.Role = Role;
