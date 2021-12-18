import { GetUserDataResponseModel } from "../../../Models/GetUserDataResponseModel";
import { Operation } from "../../../Models/Operations";
import db from "../../Configuration";
import { USER_DATA } from "../../TableNames/tableNames";

class GetUserData {
    async execute(): Promise<GetUserDataResponseModel> {
        try {
            let dbResponse = await db.DBInstance().dbConnector
                .select("*")
                .from(USER_DATA)
                .then(response => response);
            if (!dbResponse && !dbResponse.length) {
                return { operation: Operation.NoDataFound }
            }  
            return { data: dbResponse, operation: Operation.Success };
        } catch (error) {
            return { operation: Operation.Error };
        }    
    }
}
const getUserData = new GetUserData();
export default getUserData;