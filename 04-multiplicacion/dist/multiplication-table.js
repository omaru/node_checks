"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiplicationTable = void 0;
class MultiplicationTable {
    constructor(multiply, totalCalculations) {
        this.title = "Table of " + multiply;
        this.multiply = multiply;
        this.totalCalculations = totalCalculations;
        this.table = [];
        this.generateCalculation();
    }
    getTable() {
        return this.table;
    }
    getMultiply() {
        return this.multiply;
    }
    getTitle() {
        return this.title;
    }
    generateCalculation() {
        for (let i = 0; i < this.totalCalculations; i++) {
            this.table.push([this.multiply, i + 1, this.multiply * (i + 1)]);
        }
    }
}
exports.MultiplicationTable = MultiplicationTable;
