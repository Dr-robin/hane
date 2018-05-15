const Sequelize = require('sequelize');
const db = require('../lib/db');
const Account = require('./account');

const model = db.define('accountEmail', {
	email: {type: Sequelize.STRING, primaryKey: true}
}, {

});

Account.AccountEmail = Account.hasMany(model);

module.exports = model;