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
exports.CreateUserController = void 0;
require("reflect-metadata");
const http_status_1 = __importDefault(require("http-status"));
const tsyringe_1 = require("tsyringe");
const CreateUserUseCase_1 = require("../../application/create/CreateUserUseCase");
const ResponseBase_1 = require("../../../Shared/application/ResponseBase");
let CreateUserController = class CreateUserController {
    constructor(createUserUseCase) {
        this._createUserUseCase = createUserUseCase;
    }
    run(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, firstname, lastname, email, password, phone } = req.body;
                const result = yield this._createUserUseCase.run({ id, firstname, lastname, email, password, phone });
                const response = new ResponseBase_1.ResponseBase(true, http_status_1.default.CREATED, http_status_1.default[201], undefined, result);
                res.status(http_status_1.default.CREATED).send(response);
            }
            catch (error) {
                next(error);
            }
        });
    }
};
exports.CreateUserController = CreateUserController;
exports.CreateUserController = CreateUserController = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)('CreateUserUseCase')),
    __metadata("design:paramtypes", [CreateUserUseCase_1.CreateUserUseCase])
], CreateUserController);
