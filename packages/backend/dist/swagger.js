"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_autogen_1 = __importDefault(require("swagger-autogen"));
const doc = {
    info: {
        version: 'v1.0.0',
        title: 'Bonpland Api documentation',
        description: '',
    },
    servers: [
        {
            url: 'http://localhost:3002',
            description: '',
        },
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
            },
        },
        schemas: {
            CreateUserRequest: {
                id: 'string',
                firstname: 'string',
                lastname: 'string',
                email: 'string',
                password: 'string',
                phone: 'string',
            },
            LoginRequest: {
                email: 'string',
                password: 'string',
            },
            CreateRoleRequest: {
                id: 'string',
                roleName: 'string',
                roleState: 'string',
            },
            UpdateRoleRequest: {
                roleName: 'string',
                roleState: 'string',
            },
        },
    },
};
const outputFile = './swagger_output.json';
const endpointsFiles = ['./src/app/Server.ts'];
(0, swagger_autogen_1.default)({ openapi: '3.0.0' })(outputFile, endpointsFiles, doc);
