import { Knex } from "knex";
import { USER_DATA } from "../TableNames/tableNames";

class UserDataTable {
    async create(dbConnector: Knex) {
        console.log(`[DB] Creating new table: ${USER_DATA}`);
        return await dbConnector.schema.createTable(USER_DATA , (table) => {
            // creating table params.
        })
    }
}
const userDataTable = new UserDataTable();
export default userDataTable;
