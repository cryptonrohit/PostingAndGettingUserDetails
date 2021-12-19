import Knex from "knex";

class DBInitConnection {
    connectionToDB() {
        const configData = {
            client: "pg",
            connection: {
                connectionString: process.env.DATABASE_URL,
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
