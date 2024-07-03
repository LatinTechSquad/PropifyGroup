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
const express_1 = require("express");
const authContainer_1 = require("../authContainer");
const NotExistEmailError_1 = require("../../domain/errors/NotExistEmailError");
const NotMatchedPassError_1 = require("../../domain/errors/NotMatchedPassError");
const ResponseBase_1 = require("../../../Shared/application/ResponseBase");
const http_status_1 = __importDefault(require("http-status"));
const loginValidator_1 = require("../../application/login/loginValidator");
const validationErrorHandler_1 = require("../../../Shared/infrastructure/api/validationErrorHandler");
const router = (0, express_1.Router)();
const controller = authContainer_1.authContainer.resolve('AuthController');
router.post('/login', loginValidator_1.loginValidator, validationErrorHandler_1.validateReqSchema, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    /**
      #swagger.tags = ['Authentication']
      #swagger.requestBody = {
          required: true,
          schema: { $ref: "#/components/schemas/LoginRequest" }
      }
       */
    yield controller.run(req, res, next);
}));
//router.post('/email/verify');
//router.post('/token/refresh');
//router.post('/password/reset');
//router.post('/password/confirm');
//router.post('/password/change');
//router.get('/logout');
router.use((err, req, res, next) => {
    if (err instanceof NotExistEmailError_1.NotExistEmailError) {
        res
            .status(400)
            .json(new ResponseBase_1.ResponseBase(false, http_status_1.default.BAD_REQUEST, http_status_1.default[400], 'Error logging User', undefined, [
            'User width this email was not register',
        ]));
    }
    else if (err instanceof NotMatchedPassError_1.NotMatchedPasswordError) {
        res
            .status(400)
            .json(new ResponseBase_1.ResponseBase(false, http_status_1.default.BAD_REQUEST, http_status_1.default[400], 'Error logging User', undefined, ['Incorrect Password']));
    }
    else {
        next(err);
    }
});
exports.default = router;
