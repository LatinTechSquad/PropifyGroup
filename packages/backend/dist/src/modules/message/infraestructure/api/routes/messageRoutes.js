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
const messageContainer_1 = require("../../../messageContainer");
const createMessageValidator_1 = require("../../middlewares/createMessageValidator");
const messageRoutesFilter_1 = __importDefault(require("./messageRoutesFilter"));
const router = express_1.default.Router();
const createMessageController = messageContainer_1.messageContainer.resolve('CreateMessageController');
const readMessageController = messageContainer_1.messageContainer.resolve('ReadMessageController');
const deleteMessageController = messageContainer_1.messageContainer.resolve('DeleteMessageController');
const getMessagesController = messageContainer_1.messageContainer.resolve('GetMessagesUseCase');
router.post('/createMessage', createMessageValidator_1.CreateMessageValidator, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield createMessageController.run(req, res, next);
    }
    catch (err) {
        console.error(err);
    }
}));
router.get('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield readMessageController.run(req, res, next);
    }
    catch (err) {
        console.error(err);
    }
})); //tokenMessage es para que ninguna persona acceda a ese mensaje mas que la persona que lo leo
router.delete('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield deleteMessageController.run(req, res, next);
    }
    catch (err) {
        console.error(err);
    }
}));
router.get('/messages', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield getMessagesController.run(req, res, next);
    }
    catch (err) {
        console.error(err);
    }
}));
router.use('/messenge', messageRoutesFilter_1.default);
exports.default = router;
