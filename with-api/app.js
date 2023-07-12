import express from "express";
const app = express();

app.get("/", (req, res, next) => {
    console.log("debug", "Hello, Winston!");
    console.log("This is the home '.' route.");
    res.status(200).send("Loggin Hello World");
})

app.get("/event", (req, res, next) => {
    try {
        throw new Error("Not User!");
    } catch (error) {
        console.error("Events Error: Unauthenticated user");
        res.status(500).send("Error!");
    }
})

app.listen(3000, () => {
    console.log("Server Listening On Port 3000");
})