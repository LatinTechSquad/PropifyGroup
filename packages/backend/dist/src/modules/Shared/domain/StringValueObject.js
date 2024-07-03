"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringValueObject = void 0;
class StringValueObject extends String {
    constructor(value) {
        super(value);
        this._value = value;
    }
    getValue() {
        return this._value;
    }
    setValue(value) {
        this._value = value;
    }
    toString() {
        return this._value;
    }
}
exports.StringValueObject = StringValueObject;
