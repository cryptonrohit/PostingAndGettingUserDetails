import express from "express";
import userDetailsController from "./src/Controllers/UserDetailsController";
const app = express();
const port =  3456;

app.listen(port, () => {
    console.log(`listening on port ${port}......`);
})

import db from "./src/Database/Configuration";
import insertNewUserDataMiddleware from "./src/Middlewares/InsertNewUserDataMiddleware";

async function main() {
    try {
        await db.DBInstance().init();
        console.log("DB is up.");
    } catch (error) {
        console.error("Issue getting DB up", error);
    }
}
app.post("/userData", insertNewUserDataMiddleware.validate, userDetailsController.insertUserdata);
app.get("/", (req, res) => {
    res.send("Hello there. rohit");
})

main();
