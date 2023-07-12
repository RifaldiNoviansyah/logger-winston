import winston from "winston";


// urutan level
// 1.error
// 2.warn
// 3.info
// 4.http
// 5.verbos
// 6.debug
// 7.silly
const level = () => {
    // batas level debug jadi silly tidak akan di keluarkan 
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