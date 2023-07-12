import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

const level = () => {
    return 'debug';
}

const logger = winston.createLogger({
    level: level(),
    message: "Hello Logging",
    transports: [
        new winston.transports.Console({}),
        new DailyRotateFile({
            filename: 'app-%DATE%.log', // name file
            zippedArchive: true, // akan di archive
            maxSize: '1m', // max size nya 1 mega jika sudah lebih dari 1 mega akan buat file log baru
            maxFiles: '14d' // max disimpan 14 hari 
        })
    ]
});

export { logger as default }