const Sequelize = require('sequelize');
const db = require('../lib/db');
const Account = require('./account');

const model = db.define('profile', {
	id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
	name: {type: Sequelize.STRING(20), unique: true},
	domain: {type: Sequelize.STRING}
}, {
	indexes: [{fields: ['domain']}]
});

Account.Profile = Account.hasMany(model);


module.exports = model;