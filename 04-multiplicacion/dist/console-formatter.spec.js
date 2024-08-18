"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("console");
const console_formatter_1 = require("./console-formatter");
const multiplication_table_1 = require("./multiplication-table");
describe('Console Printer', () => {
    it('Should print the title and table', () => {
        const table = new multiplication_table_1.MultiplicationTable(5, 10);
        const consoleFormatter = new console_formatter_1.ConsoleFormatter(table);
        var result = consoleFormatter.formatAll();
        (0, console_1.assert)(result.includes('Table of 5'));
        console.log(result);
    });
});
