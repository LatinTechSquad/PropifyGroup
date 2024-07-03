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
exports.Server = void 0;
const body_parser_1 = require("body-parser");
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("cors"));
const invalidArgumentErrorHandler_1 = require("../modules/Shared/infrastructure/api/invalidArgumentErrorHandler");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_output_json_1 = __importDefault(require("../../swagger_output.json"));
class Server {
    constructor(port) {
        this.port = port;
        this.express = (0, express_1.default)();
        this.express.use((0, cors_1.default)());
        this.express.use((0, body_parser_1.json)());
        this.express.use((0, body_parser_1.urlencoded)({ extended: true }));
        this.express.use(invalidArgumentErrorHandler_1.invalidArgumentErrorHandler);
        this.express.use('/api', routes_1.default);
        this.express.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_output_json_1.default));
    }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            yield new Promise((resolve) => {
                const env = this.express.get('env');
                this.httpServer = this.express.listen(this.port, () => {
                    console.log(`  Frontoffice Backend App is running at http://localhost:${this.port}/api in ${env} mode`);
                    console.log('  Press CTRL-C to stop\n');
                    resolve();
                });
            });
        });
    }
    getHTTPServer() {
        return this.httpServer;
    }
    stop() {
        return __awaiter(this, void 0, void 0, function* () {
            yield new Promise((resolve, reject) => {
                if (this.httpServer != null) {
                    this.httpServer.close((error) => {
                        if (error != null) {
                            reject(error);
                            return;
                        }
                        resolve();
                    });
                }
                resolve();
            });
        });
    }
}
exports.Server = Server;
