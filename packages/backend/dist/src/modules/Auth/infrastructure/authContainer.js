"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authContainer = void 0;
const tsyringe_1 = require("tsyringe");
Object.defineProperty(exports, "authContainer", { enumerable: true, get: function () { return tsyringe_1.container; } });
const LoginUseCase_1 = require("../application/login/LoginUseCase");
const AuthRepository_1 = require("./persistence/AuthRepository");
const LoginController_1 = require("./api/LoginController");
tsyringe_1.container.register('AuthRepository', { useClass: AuthRepository_1.AuthRepository });
tsyringe_1.container.register('AuthController', { useClass: LoginController_1.AuthController });
tsyringe_1.container.register('LoginUseCase', { useClass: LoginUseCase_1.LoginUseCase });
