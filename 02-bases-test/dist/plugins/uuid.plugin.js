"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.v4 = void 0;
const uuid_1 = require("uuid");
const v4 = () => {
    return (0, uuid_1.v4)();
};
exports.v4 = v4;
exports.default = exports.v4;
