import { MultiplicationTable } from "../multiplication-table";
import { UseCase } from "./use-case";
export interface SaveFileRequest {
    fileContent:string;
    destination?:string;
    fileName?:string;

}
export class SaveFile implements UseCase<SaveFileRequest, void>{
    constructor() {
        console.log('SaveFile.useCase');
    }
    execute({ base, limit = 10 }: SaveFileRequest): void {
        console.log('SaveFile.useCase.execute');
    }
}