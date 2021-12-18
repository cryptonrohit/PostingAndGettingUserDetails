import { Knex } from "knex";
import dbTableHandler from "./CreateTableHandler";
import dbInitConnection from "./InitConnection";
/**
 * Using singleton pattern so that we can have only one instance of db and we don't need to create instance again and again.
 */
class DBConfiguration {
    public dbConnector: Knex;
    private static dbInstance: DBConfiguration;
    constructor() {
        this.dbConnector = dbInitConnection.connectionToDB();
    }
    public static DBInstance(): DBConfiguration {
        if (!DBConfiguration.dbInstance) {
            return new DBConfiguration;
        }
        return DBConfiguration.dbInstance;
    }

    async init(){
        await dbTableHandler.handle(this.dbConnector);
    }
}
export default DBConfiguration;
