"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleFormatter = void 0;
class ConsoleFormatter {
    constructor(multiplicationTable) {
        this.lineWidth = 40;
        this.multiplicationTable = multiplicationTable;
    }
    formatAll() {
        return `${this.formatTitle()}${this.formatTable()}`;
    }
    formatTitle() {
        const title = this.multiplicationTable.getTitle();
        const padding = Math.max(0, (this.lineWidth - title.length) / 2);
        let result = '======================================\n';
        result += ' '.repeat(padding) + title + '\n';
        result += '======================================\n';
        return result;
    }
    formatTable() {
        return this.multiplicationTable.getTable().map(row => `${row[0]} x ${row[1]} = ${row[2]}`).join('\n');
    }
}
exports.ConsoleFormatter = ConsoleFormatter;
