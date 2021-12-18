import { NextFunction, Request, Response } from "express";

class UserAuthenticationController {
    createToken(req: Request, res: Response, next: NextFunction) {

    }
}
const userAuthenticationController = new UserAuthenticationController();
export default userAuthenticationController;
