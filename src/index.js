const people = require('../data-sample/people-data.json');
const logger = require('./logging/logger-facade');
const { performance } = require('perf_hooks');
const start = performance.now();
const operation = 'index.reading';

people.forEach(item => {
    const duration = performance.now() - start;
    const message = `processing person: ${item._id}`;
    const parameters = `index: ${item.index}, name: ${item.name.first} ${item.name.last}`
    logger.info(message, operation, parameters, duration)
});

try {
    // force error
    throw new Error('Intentional caused error');
} catch (error) {
    logger.error(error, operation)
}