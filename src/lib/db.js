const Sequelize = require('sequelize');
const config = require('./config');

const db = new Sequelize(config.getValue('database'));
module.exports = db;
