import winston from "winston";

test("Create New Logger With Console Transport", () => {
    const logger = winston.createLogger({
        transports: [
            new winston.transports.Console({})
        ]
    });

    logger.log({
        level: "info",
        message: "Hello Logging"
    })
});