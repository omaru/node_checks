export class MultiplicationTable {
    private title: string;
    private totalCalculations: number;
    private table: number[][];
    private multiply: number;
    constructor(multiply: number, totalCalculations: number) {
        this.title = "Table of " + multiply;
        this.multiply = multiply;
        this.totalCalculations = totalCalculations;
        this.table= [];
        this.generateCalculation();
    }
    getTable() :number[][] {
        return this.table;
    }
    getMultiply(): number {
        return this.multiply;
    }
    getTitle(): string {
        return this.title;
    }
    private generateCalculation() {
        for (let i = 0; i < this.totalCalculations; i++) {
            this.table.push([this.multiply, i + 1, this.multiply * (i + 1)]);
        }
    }
}