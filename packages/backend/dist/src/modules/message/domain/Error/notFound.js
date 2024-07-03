"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFound = void 0;
class NotFound extends Error {
    constructor(attribute) {
        super('No se encontró ' + attribute);
        this.name = 'DontFound';
    }
}
exports.NotFound = NotFound;
