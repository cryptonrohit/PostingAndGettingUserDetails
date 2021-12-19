import { Knex } from "knex";
import { USER_DATA } from "../TableNames/TableNames";

class UserDataTable {
    async create(dbConnector: Knex) {
        console.log(`[DB] Creating new table: ${USER_DATA}`);
        return await dbConnector.schema.createTable(USER_DATA , (table) => {
            table.string("firstName").notNullable();
            table.string("panNumber").notNullable().unique();
            table.timestamp("dateOfBirth").notNullable();
            table.string("gender").notNullable();
            table.string("email").notNullable();
            table.string("profileImage").notNullable();
        })
    }
}
const userDataTable = new UserDataTable();
export default userDataTable;
