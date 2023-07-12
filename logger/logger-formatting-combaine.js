import winston from "winston";

const level = () => {
    return 'debug';
}

const logger = winston.createLogger({
    level: level(),
    message: "Hello Logging",
    // format: winston.format.logstash(),
    // format custome
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.ms(),
        winston.format.json()
    ),
    // format: winston.format.json(), // default jika tidak menggunakan format
    transports: [
        new winston.transports.Console({})
    ]
});

export { logger as default }