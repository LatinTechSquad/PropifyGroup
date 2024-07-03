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
exports.PrismaRepository = void 0;
const client_1 = require("@prisma/client");
class PrismaRepository {
    constructor(model) {
        this.prisma = new client_1.PrismaClient();
        this.model = model;
    }
    getModel() {
        // Usa el objeto prisma para acceder a los modelos de manera dinámica
        return this.prisma[this.model];
    }
    create(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getModel().create({
                data: entity,
            });
        });
    }
    update(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getModel().update({
                where: { id: entity.id },
                data: entity,
            });
        });
    }
    delete(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getModel().delete({ where: { id: entity.id } });
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getModel().findMany();
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getModel().findUnique({ where: { id } });
        });
    }
}
exports.PrismaRepository = PrismaRepository;
