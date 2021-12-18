import express from "express";
const app = express();
const port =  3456;

app.listen(port, () => {
    console.log(`listening on port ${port}......`);
})

import db from "./src/Database/Configuration";

async function main() {
    try {
        await db.DBInstance().init();
        console.log("DB is up.");
    } catch (error) {
        console.error("Issue getting DB up", error);
    }
}
app.get("/", (req, res) => {
    res.send("Hello there. rohit");
})

main();
