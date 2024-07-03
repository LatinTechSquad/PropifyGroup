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
const CreateRoleValidator_1 = require("../../application/create/CreateRoleValidator");
const roleContainer_1 = require("../../roleContainer");
const http_status_1 = __importDefault(require("http-status"));
const ResponseBase_1 = require("../../../Shared/application/ResponseBase");
const RoleIdAlreadyExistError_1 = require("../../domain/errors/RoleIdAlreadyExistError");
const RoleIdNotExistError_1 = require("../../domain/errors/RoleIdNotExistError");
const UpdateRoleValidator_1 = require("../../application/update/UpdateRoleValidator");
const DeleteRoleValidator_1 = require("../../application/delete/DeleteRoleValidator");
const router = (0, express_1.Router)();
const createController = roleContainer_1.roleContainer.resolve('CreateRoleController');
const updateController = roleContainer_1.roleContainer.resolve('UpdateRoleController');
const deleteController = roleContainer_1.roleContainer.resolve('DeleteRoleController');
const getRoleByIdController = roleContainer_1.roleContainer.resolve('GetRoleByIdController');
const getAllRolesController = roleContainer_1.roleContainer.resolve('GetAllRolesController');
router.post('/', CreateRoleValidator_1.CreateRoleValidator, validationErrorHandler_1.validateReqSchema, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    /**
      #swagger.tags = ['Roles']
      #swagger.requestBody = {
          required: true,
          schema: { $ref: "#/components/schemas/CreateRoleRequest" }
      }
       */
    yield createController.run(req, res, next);
}));
router.put('/:id', UpdateRoleValidator_1.UpdateRoleValidator, validationErrorHandler_1.validateReqSchema, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    /**
      #swagger.tags = ['Roles']
      #swagger.requestBody = {
          required: true,
          schema: { $ref: "#/components/schemas/UpdateRoleRequest" }
      }
       */
    yield updateController.run(req, res, next);
}));
router.delete('/:id', DeleteRoleValidator_1.DeleteRoleValidator, validationErrorHandler_1.validateReqSchema, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    /**
      #swagger.tags = ['Roles']
      }
       */
    yield deleteController.run(req, res, next);
}));
router.get('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    /**
      #swagger.tags = ['Roles']
      }
       */
    yield getRoleByIdController.run(req, res, next);
}));
router.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    /**
      #swagger.tags = ['Roles']
      }
       */
    yield getAllRolesController.run(req, res, next);
}));
router.use((err, req, res, next) => {
    if (err instanceof RoleIdAlreadyExistError_1.RoleIdAlreadyExistError) {
        res
            .status(400)
            .json(new ResponseBase_1.ResponseBase(false, http_status_1.default.BAD_REQUEST, http_status_1.default[400], 'Error registering new Role', undefined, [
            "Role with this 'id' already has been registred",
        ]));
    }
    else if (err instanceof RoleIdNotExistError_1.RoleIdNotExistError) {
        res
            .status(400)
            .json(new ResponseBase_1.ResponseBase(false, http_status_1.default.BAD_REQUEST, http_status_1.default[400], 'Error processing Role', undefined, [
            "Role with this 'id' was not been registred",
        ]));
    }
    else {
        next(err);
    }
});
exports.default = router;
