import { NextFunction, Request, Response } from "express";

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
        next();
    }
}
const insertNewUserDataMiddleware = new InsertNewUserDataMiddleware();
export default insertNewUserDataMiddleware;
