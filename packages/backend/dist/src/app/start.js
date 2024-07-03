"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const BackendApp_1 = require("./BackendApp");
dotenv_1.default.config({
    path: path_1.default.join(__dirname, '../../.env.development'),
});
try {
    void new BackendApp_1.BackendApp().start();
}
catch (error) {
    console.log(error);
}
