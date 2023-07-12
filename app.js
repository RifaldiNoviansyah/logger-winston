import express from "express";
import logger from "./logger/logger-daily-rotate.js"
const app = express();

app.get("/", (req, res, next) => {
    logger.log("debug", "Hello, Winston!");
    logger.debug("This is the home '.' route.");

    // cek level
    logger.log("error", "Error Message");
    logger.log("warn", "Warn Message");
    logger.log("info", "Info Message");
    logger.log("http", "HTTP Message");
    logger.log("verbose", "Verbose Message");
    logger.log("debug", "Debug Message");
    logger.log("silly", "Silly Message");
    
    res.status(200).send("Loggin Hello World");
})

app.get("/event", (req, res, next) => {
    try {
        throw new Error("Not User!");
    } catch (error) {
        logger.error("Events Error: Unauthenticated user");
        res.status(500).send("Error!");
    }
})

app.listen(3000, () => {
    logger.info("Server Listening On Port 3000");
})