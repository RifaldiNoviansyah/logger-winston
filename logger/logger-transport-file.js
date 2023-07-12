import winston from "winston";

const level = () => {
    return 'debug';
}

const logger = winston.createLogger({
    level: level(),
    message: "Hello Logging",
    transports: [
        new winston.transports.Console({}),
        new winston.transports.File({
            filename: "tranport-file.log"
        })
    ]
});

export { logger as default }