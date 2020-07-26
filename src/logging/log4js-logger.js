const log4js = require("log4js");
log4js.configure({
    appenders: {
        everything: { 
            type: 'dateFile', 
            filename: 'logs/log4js.log', 
            layout: {
                type: 'pattern',
                pattern: '{"@timestamp":"%d{ISO8601}","level":"%p","message":"%m", "hostname":"%h", "operation":"%X{operation}", "parameters":"%X{parameters}", "exception":"%X{exception}", "duration":%X{duration}}'
            }
        }
    },
    categories: {
        default: { appenders: [ 'everything' ], level: 'debug' }
    }
});
module.exports = log4js.getLogger();
