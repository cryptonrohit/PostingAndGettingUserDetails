import express from "express";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
const port =  3456;

app.listen(port, () => {
    console.log(`listening on port ${port}......`);
})

import db from "./src/Database/Configuration";
import insertNewUserDataMiddleware from "./src/Middlewares/InsertNewUserDataMiddleware";
import userCredentialsMiddleware from "./src/Middlewares/UserCredentialsMiddleware";
import userAuthenticationController from "./src/Controllers/UserAuthenticationController";
import userDetailsController from "./src/Controllers/UserDetailsController";
import userAuthenticationMiddleware from "./src/Middlewares/UserAuthenticationMiddleware";

async function main() {
    try {
        await db.DBInstance().init();
        console.log("DB is up.");
    } catch (error) {
        console.error("Issue getting DB up", error);
    }
}
app.post("/userData", userAuthenticationMiddleware.authenticate, insertNewUserDataMiddleware.validate, userDetailsController.insertUserdata);
app.get("/userData", userAuthenticationMiddleware.authenticate, userDetailsController.getUserData);
app.get("/tokenid", userCredentialsMiddleware.validate, userAuthenticationController.createToken);

main();
