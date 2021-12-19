import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../shared/Constants";

export async function generateAuthToken(username: string) {
    // Creating a token secret id
    const token = jwt.sign({username}, TOKEN_SECRET);
    return token;
}