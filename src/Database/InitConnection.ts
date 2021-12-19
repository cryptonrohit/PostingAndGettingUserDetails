import Knex from "knex";

class DBInitConnection {
    connectionToDB() {
        const configData = {
            client: "pg",
            connection: {
                host: "ec2-3-211-228-251.compute-1.amazonaws.com",
                user: "vnymsmpnkbkday",
                password: "3702f50b1d98bfccb26583d12ca58f46d9e47abf4a56513aac26fc736c85abf9",
                database: "dbns5arne9ma1l",
                port: 5432,
                ssl: { rejectUnauthorized: false }
            }
        }
        return Knex(configData);
    }
}
const dbInitConnection = new DBInitConnection();
export default dbInitConnection;
