const environment = 'production' || 'development';
const knexConfig = require('../knexfile');
const environmentConfig = knexConfig[environment];
const knex = require('knex');
const connection = knex(environmentConfig);

module.exports = connection;