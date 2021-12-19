import { Request, Response } from "express";
import insertNewUserData from "../Database/Entities/Command/InsertNewUserData";
import getUserData from "../Database/Entities/Query/GetUserData";
import { GenderModel } from "../Models/GenderModel";
import UserDataModel from "../Models/UserDataRequestModel";
import { getHttpStatusData } from "../shared/GetHttpStatusCodesAndMessages";

class UserDetailsController {
    async insertUserdata(req: Request, res: Response) {
        const userData = new UserDataModel
           (req.body.firstName as string, 
            req.body.panNumber as string, 
            req.body.dateOfBirth as unknown as Date, 
            req.body.gender as GenderModel, 
            req.body.email as string, 
            req.body.profileImage as string);

        const result = await insertNewUserData.execute(userData);
        const {statusCode, outputData} = getHttpStatusData(result);
        res.status(statusCode).send(outputData);
    }

    async getUserData(req: Request, res: Response) {
        const result = await getUserData.execute();
        const {statusCode} = getHttpStatusData(result.operation);
        res.status(statusCode).send(result.data);
    }
}
const userDetailsController = new UserDetailsController();
export default userDetailsController;
