"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const multiplication_table_1 = require("./multiplication-table");
describe('Multiplication Table', () => {
    it('Should create a multiplication table', () => {
        const table = new multiplication_table_1.MultiplicationTable(5, 10);
        console.log(table.getTable());
    });
});
