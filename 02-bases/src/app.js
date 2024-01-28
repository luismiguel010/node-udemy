const { buidLogger } = require('./plugins')

const logger = buidLogger('app.js')

logger.log('Hola logger');
logger.error('Esto es algo malo');
