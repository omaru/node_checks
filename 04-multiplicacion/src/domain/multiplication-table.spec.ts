import { MultiplicationTable } from "./multiplication-table";

describe('Multiplication Table', () => {
    it('Should create a multiplication table', () => {
        const table = new MultiplicationTable(5, 10);
        console.log(table.getTable());
    });
});