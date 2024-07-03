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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUseCase = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const argon2_1 = __importDefault(require("argon2"));
const tsyringe_1 = require("tsyringe");
const NotMatchedPassError_1 = require("../../domain/errors/NotMatchedPassError");
const NotExistEmailError_1 = require("../../domain/errors/NotExistEmailError");
const LoginDto_1 = require("./LoginDto");
let LoginUseCase = class LoginUseCase {
    constructor(authRepository) {
        this._repository = authRepository;
    }
    run(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this._repository.getByEmail(req.email);
            if (!user)
                throw new NotExistEmailError_1.NotExistEmailError();
            const isMatched = yield argon2_1.default.verify(user.password, req.password);
            if (!isMatched)
                throw new NotMatchedPassError_1.NotMatchedPasswordError();
            const generateJWT = jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, 'thiismysecretkey');
            const auth = new LoginDto_1.LoginDTO(user.id, generateJWT);
            return auth;
        });
    }
};
exports.LoginUseCase = LoginUseCase;
exports.LoginUseCase = LoginUseCase = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)('AuthRepository')),
    __metadata("design:paramtypes", [Object])
], LoginUseCase);
