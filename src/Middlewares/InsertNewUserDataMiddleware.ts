import { NextFunction, Request, Response } from "express";
import { UserEnumData } from "../Models/UserEnumData";
import { ValidationStatusModel } from "../Models/ValidationStatusModel";
import { dateOfBirthValidation } from "../shared/Validations/DateOfBirthValidation";
import { emailValidation } from "../shared/Validations/EmailValidation";
import { genderValidation } from "../shared/Validations/GenderValidation";
import { panNumberValidation } from "../shared/Validations/PanNumberValidation";
import { stringValidation } from "../shared/Validations/StringValidation";
import { undefinedValidation } from "../shared/Validations/UndefinedValidation";
import { URLValidation } from "../shared/Validations/URLValidation";

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

        for(let {name, value} of requestArray) {
            value = value as string;
            switch (name) {
                case UserEnumData.FirstName:
                    if( !undefinedValidation(value) && !stringValidation(value)) {
                        validationStatus = { error: `Request parameter ${name} is not a valid string` };
                    }
                    validationStatus = { error: null };  
                    break;
                case UserEnumData.PanNumber:
                    if( !undefinedValidation(value) && !panNumberValidation(value)) {
                        validationStatus = { error: `Request parameter ${name} is not a valid` };
                    }
                    validationStatus = { error: null }; 
                    break;
                case UserEnumData.DateOfBirth:
                    if( !undefinedValidation(value) && !dateOfBirthValidation(value)) {
                        validationStatus = { error: `Request parameter ${name} is not in valid date format: YYYY/MM/DD` };
                    }
                    validationStatus = { error: null };  
                    break;
                case UserEnumData.Gender:
                    if( !undefinedValidation(value) && !genderValidation(value)) {
                        validationStatus = { error: `Request parameter ${name} is not valid gender. Please select either male/female/transgender` };
                    }
                    validationStatus = { error: null };  
                    break;
                case UserEnumData.Email:
                    if( !undefinedValidation(value) && !emailValidation(value)) {
                        validationStatus = { error: `Request parameter ${name} is not valid email. Please enter valid email` };
                    }
                    validationStatus = { error: null };
                    break;     
                case UserEnumData.ProfileImage:
                    if( !undefinedValidation(value) && !URLValidation(value)) {
                        validationStatus = { error: `Request parameter ${name} is not valid url. Please enter valid url` };
                    }
                    validationStatus = { error: null };
                    break;                       
                default:
                    validationStatus = { error: `Parameter ${name} is not valid` };
                    break;
            }
            if (validationStatus.error) {
                res.status(400);
                res.send(validationStatus);
                return;
            }
        }
        next();
    }    
}
const insertNewUserDataMiddleware = new InsertNewUserDataMiddleware();
export default insertNewUserDataMiddleware;
