import UserDataModel from "../Models/UserDataRequestModel";

class InsertUserDataService {
    async execute(userData: UserDataModel) {
        return {statusCode: 200, outputData: ""};
    }
}
const insertUserDataService = new InsertUserDataService();
export default insertUserDataService;
