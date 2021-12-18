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
                    validationStatus = InsertNewUserDataMiddleware.validateFirstName(name, value);  
                    break;  
                case UserEnumData.PanNumber:
                    validationStatus = InsertNewUserDataMiddleware.validatePanNumber(name, value);  
                    break;
                case UserEnumData.DateOfBirth:
                    validationStatus = InsertNewUserDataMiddleware.validateDateOfBirth(name, value);  
                    break;
                case UserEnumData.Gender:
                    validationStatus = InsertNewUserDataMiddleware.validateGender(name, value);  
                    break;
                case UserEnumData.Email:
                    validationStatus = InsertNewUserDataMiddleware.validateEmail(name, value);  
                    break;     
                case UserEnumData.ProfileImage:
                    validationStatus = InsertNewUserDataMiddleware.validateImage(name, value);  
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

    static validateFirstName(name: string, value: string): ValidationStatusModel {
        if( !undefinedValidation(value) && !stringValidation(value)) {
            return { error: `Request parameter ${name} is not a valid string` };
        }
        return { error: null };
    }

    static validatePanNumber(name: string, value: string): ValidationStatusModel {
        if( !undefinedValidation(value) && !panNumberValidation(value)) {
            return { error: `Request parameter ${name} is not a valid` };
        }
        return { error: null };
    }

    static validateDateOfBirth(name: string, value: string): ValidationStatusModel {
        if( !undefinedValidation(value) && !dateOfBirthValidation(value)) {
            return { error: `Request parameter ${name} is not in valid date format: YYYY/MM/DD` };
        }
        return { error: null };
    }

    static validateGender(name: string, value: string): ValidationStatusModel {
        if( !undefinedValidation(value) && !genderValidation(value)) {
            return { error: `Request parameter ${name} is not valid gender. Please select either male/female/transgender` };
        }
        return { error: null };
    }

    static validateEmail(name: string, value: string): ValidationStatusModel {
        if( !undefinedValidation(value) && !emailValidation(value)) {
            return { error: `Request parameter ${name} is not valid email. Please enter valid email` };
        }
        return { error: null };
    }

    static validateImage(name: string, value: string): ValidationStatusModel {
        if( !undefinedValidation(value) && !URLValidation(value)) {
            return { error: `Request parameter ${name} is not valid url. Please enter valid url` };
        }
        return { error: null };
    }
    
}
const insertNewUserDataMiddleware = new InsertNewUserDataMiddleware();
export default insertNewUserDataMiddleware;
