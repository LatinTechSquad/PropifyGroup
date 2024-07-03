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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = require("express");
const validationErrorHandler_1 = require("../../../Shared/infrastructure/api/validationErrorHandler");
const CreateUserValidator_1 = require("../../application/create/CreateUserValidator");
const userContainer_1 = require("../../userContainer");
const http_status_1 = __importDefault(require("http-status"));
const ResponseBase_1 = require("../../../Shared/application/ResponseBase");
const UserIdAlreadyExistError_1 = require("../../domain/errors/UserIdAlreadyExistError");
const UserEmailAlreadyExistError_1 = require("../../domain/errors/UserEmailAlreadyExistError");
const router = (0, express_1.Router)();
const controller = userContainer_1.userContainer.resolve('CreateUserController');
router.post('/', CreateUserValidator_1.CreateUserValidator, validationErrorHandler_1.validateReqSchema, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    /**
      #swagger.tags = ['Users']
      #swagger.requestBody = {
          required: true,
          schema: { $ref: "#/components/schemas/CreateUserRequest" }
      }
       */
    yield controller.run(req, res, next);
}));
router.use((err, req, res, next) => {
    if (err instanceof UserEmailAlreadyExistError_1.UserEmailAlreadyExistError) {
        res
            .status(400)
            .json(new ResponseBase_1.ResponseBase(false, http_status_1.default.BAD_REQUEST, http_status_1.default[400], 'Error registering new User', undefined, [
            "User with this 'email' already has been registred",
        ]));
    }
    else if (err instanceof UserIdAlreadyExistError_1.UserIdAlreadyExistError) {
        res
            .status(400)
            .json(new ResponseBase_1.ResponseBase(false, http_status_1.default.BAD_REQUEST, http_status_1.default[400], 'Error registering new User', undefined, [
            "User with this 'id' already has been registred",
        ]));
    }
    else {
        next(err);
    }
});
exports.default = router;
