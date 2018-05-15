const Sequelize = require('sequelize');
const db = require('../lib/db');
const Account = require('./account');

const model = db.define('session', {
	id: {type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4, primaryKey: true}
}, {

});

Account.hasMany(model);

model.sync();

module.exports = model;