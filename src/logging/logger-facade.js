const logger = require('./log4js-logger');

const info = (message, operation = '', parameters = '', duration = 0 ) => {
    logger.addContext('operation', operation);
    logger.addContext('parameters', parameters);
    logger.addContext('duration', duration);
    logger.info(message);
};

const error = (err, operation = '', parameters = '') => {
    let exception = '';
    if(err && err.stack) {
        exception = err.stack.replace(/[\n\r]+/g, '').replace(/\s{2,10}/g, ' ');
    }

    logger.addContext('exception', exception);
    logger.addContext('operation', operation);
    logger.addContext('parameters', parameters);
    logger.addContext('duration', 0);
    logger.error(err.message || err)
};

module.exports = {
    info,
    error
}