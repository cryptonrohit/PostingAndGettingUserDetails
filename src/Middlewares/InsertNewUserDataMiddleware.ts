import { NextFunction, Request, Response } from "express";
import { UserDataModel } from "../Models/UserDataModel";
import { ValidationStatusModel } from "../Models/ValidationStatusModel";
import { stringValidation } from "../shared/StringValidation";
import { undefinedValidation } from "../shared/UndefinedValidation";

// Not using "validator" package for validating the request parameters as that is what is been told according to the test.
// Instead used native way of validating.

class InsertNewUserDataMiddleware {
    validate(req: Request, res: Response, next: NextFunction) {
        const requestArray = [
            {name: "firstName", value: req.query.firstName},
            {name: "panNumber", value: req.query.panNumber},
            {name: "dateOfBirth", value: req.query.dateOfBirth},
            {name: "gender", value: req.query.gender},
            {name: "email", value: req.query.email},
            {name: "profileImage", value: req.query.profileImage},
        ]

        let validationStatus: ValidationStatusModel

        for(const {name, value} of requestArray) {
            switch (name) {
                case UserDataModel.FirstName:
                    validationStatus = this.validateFirstName(name, value as string);  
                    break;            
                default:
                    break;
            }
        }


        next();
    }

    validateFirstName(name: string, value: string): ValidationStatusModel {
        if( !undefinedValidation(value) && !stringValidation(value)) {
            return { error: `Request parameter ${name} is not a valid string` };
        }
        return { error: null };
    }
}
const insertNewUserDataMiddleware = new InsertNewUserDataMiddleware();
export default insertNewUserDataMiddleware;
