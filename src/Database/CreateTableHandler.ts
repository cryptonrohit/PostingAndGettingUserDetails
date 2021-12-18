import { Knex } from "knex";

class DBTableHandler {
    public async handle(dbConnector: Knex) {
        try {
            // check whether table exists or not
        } catch (error) {
            console.error(`[DB] Issue creating table. Error: ${error}`);
        }
    }
}
const dbTableHandler = new DBTableHandler();
export default dbTableHandler;
