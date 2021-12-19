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
            {name: "firstName", value: req.body.firstName},
            {name: "panNumber", value: req.body.panNumber},
            {name: "dateOfBirth", value: req.body.dateOfBirth},
            {name: "gender", value: req.body.gender},
            {name: "email", value: req.body.email},
            {name: "profileImage", value: req.body.profileImage},
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
        if(!undefinedValidation(value)) {
            return { error: `Request parameter ${name} is undefined.` }
        }
        if(!stringValidation(value)) {
            return { error: `Request parameter ${name} is not a valid string.` };
        }
        return { error: null };
    }

    static validatePanNumber(name: string, value: string): ValidationStatusModel {
        if(!undefinedValidation(value)) {
            return { error: `Request parameter ${name} is undefined.` }
        }
        if(!panNumberValidation(value)) {
            return { error: `Request parameter ${name} is not a valid pan number. 1. It should be 10 digit 2. The first 5 characters are letters, then next 4 are numbers and last is a letter. 3. Fourth character is either of ["C","P","H","F","A","T","B","L","J","G"]` };
        }
        return { error: null };
    }

    static validateDateOfBirth(name: string, value: string): ValidationStatusModel {
        if(!undefinedValidation(value)) {
            return { error: `Request parameter ${name} is undefined.` }
        }
        if(!dateOfBirthValidation(value)) {
            return { error: `Request parameter ${name} is not in valid date format: YYYY/MM/DD. 1. year should be between 1900-2099. 2. month should be between 01-12. 2. day should be between 01-31` };
        }
        return { error: null };
    }

    static validateGender(name: string, value: string): ValidationStatusModel {
        if(!undefinedValidation(value)) {
            return { error: `Request parameter ${name} is undefined.` }
        }
        if(!genderValidation(value)) {
            return { error: `Request parameter ${name} is not valid gender. Please select male/female/transgender` };
        }
        return { error: null };
    }

    static validateEmail(name: string, value: string): ValidationStatusModel {
        if(!undefinedValidation(value)) {
            return { error: `Request parameter ${name} is undefined.` }
        }
        if(!emailValidation(value)) {
            return { error: `Request parameter ${name} is not valid email` };
        }
        return { error: null };
    }

    static validateImage(name: string, value: string): ValidationStatusModel {
        if(!undefinedValidation(value)) {
            return { error: `Request parameter ${name} is undefined.` }
        }
        if(!URLValidation(value)) {
            return { error: `Request parameter ${name} is not valid url` };
        }
        return { error: null };
    }
    
}
const insertNewUserDataMiddleware = new InsertNewUserDataMiddleware();
export default insertNewUserDataMiddleware;
