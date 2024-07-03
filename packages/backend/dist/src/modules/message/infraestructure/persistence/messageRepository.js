"use strict";
//aca estara la operacion de prisma.create message - la logica
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageRepositoryPrisma = void 0;
const client_1 = require("@prisma/client");
const validateAdresseeRol_1 = require("../../domain/services/validateAdresseeRol");
const InputRolError_1 = require("../../domain/Error/InputRolError");
const tsyringe_1 = require("tsyringe");
const notFound_1 = require("../../domain/Error/notFound");
const messageMapper_1 = require("../../domain/services/messageMapper");
let messageRepositoryPrisma = class messageRepositoryPrisma {
    constructor(prisma) {
        this.prisma = prisma;
    }
    createMessage(newMessage) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const remitente = yield this.prisma.user.findFirst({ where: { id: newMessage.user_id.toString() } });
                const destinatario = yield this.prisma.user.findFirst({ where: { email: newMessage.email.toString() } });
                if (!remitente || !destinatario) {
                    throw new notFound_1.NotFound('Usuario');
                }
                const destinatarioRolId = (_a = destinatario === null || destinatario === void 0 ? void 0 : destinatario.user_type) !== null && _a !== void 0 ? _a : '';
                const remitenteRolId = (_b = remitente === null || remitente === void 0 ? void 0 : remitente.user_type) !== null && _b !== void 0 ? _b : '';
                const validacion = yield (0, validateAdresseeRol_1.validateAdresseRol)(destinatarioRolId, remitenteRolId);
                if (validacion) {
                    yield this.prisma.message.create({
                        data: {
                            id: newMessage.id.value,
                            user_id: newMessage.user_id.toString(),
                            email: newMessage.email.toString(),
                            cell_phone: newMessage.cellphone.toString(),
                            subjet: newMessage.subject.toString(),
                            message: newMessage.message.toString(),
                        },
                    });
                }
                else {
                    throw new InputRolError_1.InputRolError();
                }
            }
            catch (error) {
                console.error('Error al crear mensaje', error);
            }
        });
    }
    readMessage(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const messageData = yield this.prisma.message.findUnique({ where: { id: id } });
                return messageData ? (0, messageMapper_1.createTypeMessageFromData)(messageData) : null;
            }
            catch (error) {
                throw error;
            }
        });
    }
    deleteMessage(id, userEmail) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const messageToDelete = yield this.prisma.message.findUnique({ where: { id: id } });
                if (userEmail === (messageToDelete === null || messageToDelete === void 0 ? void 0 : messageToDelete.email)) {
                    messageToDelete.email = '';
                    yield this.prisma.message.update({
                        where: { id: id },
                        data: messageToDelete,
                    });
                }
                else {
                    yield this.prisma.message.update({
                        where: { id: id },
                        data: {
                            user_id: ' ',
                        },
                    });
                }
            }
            catch (error) {
                throw error;
            }
        });
    }
    getMessages(user_id, userEmail) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const receivedMessages = yield this.getReceivedMessages(userEmail);
                const sentMessages = yield this.getSentMessages(user_id);
                if (!receivedMessages && !sentMessages) {
                    return null;
                }
                // Combinar los mensajes recibidos y enviados en una lista única
                const allMessages = [];
                if (sentMessages) {
                    allMessages.push(...sentMessages);
                }
                if (receivedMessages) {
                    allMessages.push(...receivedMessages);
                }
                return allMessages;
            }
            catch (error) {
                return [];
            }
        });
    }
    getReceivedMessages(userEmail) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const messagesData = yield this.prisma.message.findMany({ where: { email: userEmail } });
                if (!messagesData) {
                    return null;
                }
                const messagesPromises = messagesData.map((messageData) => __awaiter(this, void 0, void 0, function* () { return (0, messageMapper_1.createTypeMessageFromData)(messageData); }));
                const messages = yield Promise.all(messagesPromises);
                return messages;
            }
            catch (error) {
                throw Error;
            }
        });
    }
    getSentMessages(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const messagesData = yield this.prisma.message.findMany({ where: { user_id: user_id } });
                if (!messagesData) {
                    return null;
                }
                const messagesPromises = messagesData.map((messageData) => __awaiter(this, void 0, void 0, function* () { return (0, messageMapper_1.createTypeMessageFromData)(messageData); }));
                const messages = yield Promise.all(messagesPromises);
                return messages;
            }
            catch (error) {
                throw Error;
            }
        });
    }
    getMessageByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const messagesData = yield this.prisma.message.findMany({ where: { email: email } });
                if (!messagesData) {
                    return null;
                }
                const messagesPromises = messagesData.map((messageData) => __awaiter(this, void 0, void 0, function* () { return (0, messageMapper_1.createTypeMessageFromData)(messageData); }));
                const messages = yield Promise.all(messagesPromises);
                return messages;
            }
            catch (error) {
                throw Error;
            }
        });
    }
    getMessageByContent(phrase) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const messagesData = yield this.prisma.message.findMany({
                    where: {
                        OR: [{ message: { contains: phrase } }, { subjet: { contains: phrase } }],
                    },
                });
                if (!messagesData) {
                    return null;
                }
                const messagesPromises = messagesData.map((messageData) => __awaiter(this, void 0, void 0, function* () { return (0, messageMapper_1.createTypeMessageFromData)(messageData); }));
                const messages = yield Promise.all(messagesPromises);
                return messages;
            }
            catch (error) {
                throw Error;
            }
        });
    }
};
exports.messageRepositoryPrisma = messageRepositoryPrisma;
exports.messageRepositoryPrisma = messageRepositoryPrisma = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [Object])
], messageRepositoryPrisma);
