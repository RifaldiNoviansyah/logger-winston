import winston from "winston";

const logger = winston.createLogger({
    // level: "info",
    message: "Hello Logging"
});

export { logger as default }