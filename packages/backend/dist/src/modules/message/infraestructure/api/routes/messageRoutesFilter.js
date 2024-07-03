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
const express_1 = __importDefault(require("express"));
const messageContainer_1 = require("src/modules/message/messageContainer");
const router = express_1.default.Router();
const getMessageByEmailController = messageContainer_1.messageContainer.resolve('GetMessageByEmailUseCase');
const getSentMessagesController = messageContainer_1.messageContainer.resolve('GetSentMessagesUseCase');
const getReceivedMessagesController = messageContainer_1.messageContainer.resolve('GetReceivedMessagesUseCase');
const getMessagesController = messageContainer_1.messageContainer.resolve('GetMessagesUseCase');
const getMessageByContentController = messageContainer_1.messageContainer.resolve('GetMessageByContentUseCase');
/*la idea es pasarles el email y user_id del token, en proceso*/
router.get('/allMessages', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        console.log(userData);
        if (userData) {
            yield getMessagesController.run(userData, res, next);
        }
        else {
            return res.status(401).json({ message: 'Datos de usuario no encontrados' });
        }
        yield getMessagesController.run(userData, res, next);
    }
    catch (err) {
        console.error(err);
    }
}));
router.get('/:userEmail', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield getReceivedMessagesController.run(req, res, next);
    }
    catch (err) {
        console.error(err);
    }
}));
router.get('/:user_id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield getSentMessagesController.run(req, res, next);
    }
    catch (err) {
        console.error(err);
    }
}));
router.get('/:email', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield getMessageByEmailController.run(req, res, next);
    }
    catch (err) {
        console.error(err);
    }
}));
router.get('/:content', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield getMessageByContentController.run(req, res, next);
    }
    catch (err) {
        console.error(err);
    }
}));
exports.default = router;
