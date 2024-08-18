import { assert } from "console";
import { ConsoleFormatter } from "./console-formatter";
import { MultiplicationTable } from "./domain/multiplication-table";

describe('Console Printer', () => {
    it('Should print the title and table', () => {
        const table = new MultiplicationTable(5, 10);
        const consoleFormatter = new ConsoleFormatter(table);
        var result:string = consoleFormatter.formatAll();
        assert(result.includes('Table of 5'));
        console.log(result);
    });
});