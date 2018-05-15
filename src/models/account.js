const Sequelize = require('sequelize');
const db = require('../lib/db');

const model = db.define('account', {
	id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
	password: {type: Sequelize.STRING(60)}
}, {
	timestamps: true, paranoid: true
});

module.exports = model;