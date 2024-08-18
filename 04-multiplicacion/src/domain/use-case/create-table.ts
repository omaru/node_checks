import { MultiplicationTable } from "../multiplication-table";
import { UseCase } from "./use-case";
export interface CreateTableRequest {
    base: number;
    limit?: number;

}
export class CreateTable implements UseCase<CreateTableRequest, MultiplicationTable> {
    constructor() {
        console.log('CreateTable.useCase');
    }
    execute({ base, limit = 10 }: CreateTableRequest): MultiplicationTable {
        console.log('CreateTable.useCase.execute');
        return new MultiplicationTable(base, limit);
    }
}