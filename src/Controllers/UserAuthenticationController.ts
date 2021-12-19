import { Request, Response } from "express";
import { generateAuthToken } from "../Authentication/getJWTToken";

class UserAuthenticationController {
    async createToken(req: Request, res: Response) {
        try {
            const token = await generateAuthToken(req.body.username)
            res.status(200).send({token: token});
        } catch (e) {
            res.status(400).send(e.message)
        }
    }
}
const userAuthenticationController = new UserAuthenticationController();
export default userAuthenticationController;
