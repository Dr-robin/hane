const sequelize = require('sequelize');
const config = require('./config');

const db = sequelize(config.getValue('database'));
module.exports = db;
