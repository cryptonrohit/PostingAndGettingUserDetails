import { Operation } from "../../../Models/Operations";
import UserDataModel from "../../../Models/UserDataRequestModel";
import db from "../../Configuration";
import { USER_DATA } from "../../TableNames/tableNames";

class InsertNewUserData {
    async execute(userData: UserDataModel): Promise<Operation> {
        try {
            await db.DBInstance().dbConnector
                .insert({...userData})
                .into(USER_DATA)
                .then(response => response);
            return Operation.Created;
        } catch (error) {
            if (error.code == "23505") {
                // Check for dupliacte key wrt to pan number
                return Operation.AlreadyExists;
            }
            console.error("[DB] Error inserting userData. Error: ", error);
            return Operation.Error;
        }
    }
}
const insertNewUserData = new InsertNewUserData();
export default insertNewUserData;