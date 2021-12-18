import { Knex } from "knex";
import userDataTable from "./TableCreation/UserDataTable";
import { USER_DATA } from "./TableNames/TableNames";

class DBTableHandler {
    public async handle(dbConnector: Knex) {
        try {
            const userTableCreated = await dbConnector.schema.hasTable(USER_DATA);
            !userTableCreated ? userDataTable.create(dbConnector) : this.existingTableLog();
        } catch (error) {
            console.error(`[DB] Issue creating table. Error: ${error}`);
        }
    }
    private existingTableLog() {
        console.log("[DB] Table already existing");
    }
}
const dbTableHandler = new DBTableHandler();
export default dbTableHandler;
