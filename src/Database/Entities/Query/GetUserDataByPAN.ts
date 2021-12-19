import { GetUserDataResponseModel } from "../../../Models/GetUserDataResponseModel";
import { Operation } from "../../../Models/Operations";
import db from "../../Configuration";
import { USER_DATA } from "../../TableNames/TableNames";

class GetUserDataByPAN {
    async execute(panNumber: string): Promise<GetUserDataResponseModel> {
        try {
            let dbResponse = await db.DBInstance().dbConnector
                .select("*")
                .from(USER_DATA)
                .where({panNumber})
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
const getUserDataByPAN = new GetUserDataByPAN();
export default getUserDataByPAN;