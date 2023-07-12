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
            handleExceptions:  true, 
            filename: "tranport-file-exceptions.log"
        })
    ]
});

// function yang tidak di gunakan dan akan error
// exception ini aka di tangkap handle handleExceptions:  true, 
hallo();

export { logger as default }