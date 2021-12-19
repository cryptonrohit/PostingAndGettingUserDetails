import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../shared/Constants";

class UserAuthenticationMiddleware {
    authenticate(req: Request, res: Response, next: NextFunction) {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (token == null) {
            return res.status(401).send("You are not an authorized user. Please authenticate!")
        }

        jwt.verify(token, TOKEN_SECRET as string, (err: any, user: any) => {
            if(err) {
                console.log("[JWT] Some issue happened while verifying the jwt token", err);
                return res.status(403).send("[JWT] Forbidden to access the operation as JWT token is invalid.")
            }
            // moves to next function
            next()
        })
    }
}
const userAuthenticationMiddleware = new UserAuthenticationMiddleware();
export default userAuthenticationMiddleware;
