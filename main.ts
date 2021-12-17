import express from "express";
const app = express();
const port =  3456;

app.get("/", (req, res) => {
    res.send("Hello there. rohit");
})

app.listen(port, () => {
    console.log(`listening on port ${port}......`);
})
