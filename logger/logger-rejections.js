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
            handleExceptions: true,
            handleRejections: true, // digunakan untuk detek ada promise rejction
            filename: "tranport-file-rejections.log"
        })
    ]
});

export { logger as default }