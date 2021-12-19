import Knex from "knex";

class DBInitConnection {
    connectionToDB() {
        const configData = {
            client: "pg",
            connection: {
                connectionString: "postgresql-angular-49699",
                ssl: {
                    rejectUnauthorized: false
                }
            }
        }
        return Knex(configData);
    }
}
const dbInitConnection = new DBInitConnection();
export default dbInitConnection;
