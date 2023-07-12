import winston from "winston";

const level = () => {
    return 'debug';
}

const logger = winston.createLogger({
    level: level(),
    message: "Hello Logging",
    transports: [
        new winston.transports.Console({})
    ]
});

export { logger as default }