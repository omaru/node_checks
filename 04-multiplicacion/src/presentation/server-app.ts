import { ConsoleFormatter } from "../console-formatter";
import { CreateTable } from "../domain/use-case/create-table";

interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
}
export class ServerApp {
    static run(options: RunOptions) {
        console.log('ServerApp.run');
        const table = new CreateTable().execute({ base: options.base, limit: options.limit });
        if (options.showTable) {
            var result = new ConsoleFormatter(table).formatAll();
            console.log(result);
        }
    }
}