import { NextFunction, Request, Response } from "express";

class UserCredentialsMiddleware {
    validate(req: Request, res: Response, next: NextFunction) {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).send("Either of username or password is undefined");
        }
        // Validating user and password with dummy data.
        if (username !== "admin" || password !== "root") {
            return res.status(400).send("Invalid username or password");
        }
        next();
    }
}
const userCredentialsMiddleware = new UserCredentialsMiddleware();
export default userCredentialsMiddleware;
