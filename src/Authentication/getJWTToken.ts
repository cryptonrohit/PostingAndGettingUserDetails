import jwt from "jsonwebtoken";
import crypto from "crypto"

export async function generateAuthToken(username: string) {
    // Creating a token secret id
    const TOKEN_SECRET = crypto.randomBytes(64).toString("hex")
    const token = jwt.sign({username}, TOKEN_SECRET);
    return token;
}