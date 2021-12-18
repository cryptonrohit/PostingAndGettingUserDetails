import { Request, Response } from "express";
import { GenderModel } from "../Models/GenderModel";
import UserDataModel from "../Models/UserDataRequestModel";
import insertUserDataService from "../Services/InsertUserDataService";

class UserDetailsController {
    async insertUserdata(req: Request, res: Response) {
        const userData = new UserDataModel
           (req.query.firstName as string, 
            req.query.panNumber as string, 
            req.query.dateOfBirth as unknown as Date, 
            req.query.gender as GenderModel, 
            req.query.email as string, 
            req.query.profileImage as string);
        const result = await insertUserDataService.execute(userData);
        res.status(result.statusCode).send(result.outputData);
    }
}
const userDetailsController = new UserDetailsController();
export default userDetailsController;
