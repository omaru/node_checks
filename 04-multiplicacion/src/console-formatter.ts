import { MultiplicationTable } from "./domain/multiplication-table";

export class ConsoleFormatter {
    private multiplicationTable: MultiplicationTable;
    private lineWidth:number = 40;
    constructor(multiplicationTable: MultiplicationTable) {
        this.multiplicationTable = multiplicationTable;
    }

    public formatAll(): string {
        return `${this.formatTitle()}${this.formatTable()}`;
    }

    public formatTitle(): string {
        const title = this.multiplicationTable.getTitle();
        const padding = Math.max(0, (this.lineWidth - title.length) / 2);
        let result = '======================================\n';
        result += ' '.repeat(padding) + title + '\n';
        result += '======================================\n';
        return result;
    }

    public formatTable(): string {
        return this.multiplicationTable.getTable().map(row => `${row[0]} x ${row[1]} = ${row[2]}`).join('\n');
    }
}