import { NextFunction, Request, Response } from "express";
import { panNumberValidation } from "../shared/Validations/PanNumberValidation";
import { undefinedValidation } from "../shared/Validations/UndefinedValidation";

class GetUserDataByPANMiddleware {
    validate(req: Request, res: Response, next: NextFunction) {
        if(!undefinedValidation(req.params.panNumber)) {
            return res.status(400).send("PAN number is undefined.");
        }
        if(!panNumberValidation(req.params.panNumber)) {
            return res.status(400).send(`PAN is not valid. 1. It should be 10 digit 2. The first 5 characters are letters, then next 4 are numbers and last is a letter. 3. Fourth character is either of ["C","P","H","F","A","T","B","L","J","G"]`);
        }
        next();
    }
}
const getUserDataByPANMiddleware = new GetUserDataByPANMiddleware();
export default getUserDataByPANMiddleware;
