"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_plugin_1 = require("../plugins/uuid.plugin");
const buildPerson = ({ name, birthdate }) => {
    return {
        id: (0, uuid_plugin_1.v4)(),
        name: name,
        birthdate: birthdate
    };
};
const obj = { name: 'nombre', birthdate: '0101', id: '' };
const nombre = buildPerson(obj);
console.log(nombre);
