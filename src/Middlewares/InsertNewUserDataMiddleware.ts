import { NextFunction, Request, Response } from "express";
import { UserDataModel } from "../Models/UserDataModel";
import { ValidationStatusModel } from "../Models/ValidationStatusModel";
import { dateOfBirthValidation } from "../shared/Validations/DateOfBirthValidation";
import { emailValidation } from "../shared/Validations/EmailValidation";
import { genderValidation } from "../shared/Validations/GenderValidation";
import { panNumberValidation } from "../shared/Validations/PanNumberValidation";
import { stringValidation } from "../shared/Validations/StringValidation";
import { undefinedValidation } from "../shared/Validations/UndefinedValidation";

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
                case UserDataModel.PanNumber:
                    validationStatus = this.validatePanNumber(name, value as string);  
                    break;
                case UserDataModel.DateOfBirth:
                    validationStatus = this.validateDateOfBirth(name, value as string);  
                    break;
                case UserDataModel.Gender:
                    validationStatus = this.validateGender(name, value as string);  
                    break;
                case UserDataModel.Email:
                    validationStatus = this.validateEmail(name, value as string);  
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

    validatePanNumber(name: string, value: string): ValidationStatusModel {
        if( !undefinedValidation(value) && !panNumberValidation(value)) {
            return { error: `Request parameter ${name} is not a valid` };
        }
        return { error: null };
    }

    validateDateOfBirth(name: string, value: string): ValidationStatusModel {
        if( !undefinedValidation(value) && !dateOfBirthValidation(value)) {
            return { error: `Request parameter ${name} is not in valid date format: YYYY/MM/DD` };
        }
        return { error: null };
    }

    validateGender(name: string, value: string): ValidationStatusModel {
        if( !undefinedValidation(value) && !genderValidation(value)) {
            return { error: `Request parameter ${name} is not valid gender. Please select either male/female/transgender` };
        }
        return { error: null };
    }

    validateEmail(name: string, value: string): ValidationStatusModel {
        if( !undefinedValidation(value) && !emailValidation(value)) {
            return { error: `Request parameter ${name} is not valid email. Please enter valid email` };
        }
        return { error: null };
    }
    
}
const insertNewUserDataMiddleware = new InsertNewUserDataMiddleware();
export default insertNewUserDataMiddleware;
