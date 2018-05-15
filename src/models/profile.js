const Sequelize = require('sequelize');
const db = require('../lib/db');
const Account = require('./account');

const model = db.define('profile', {
	id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
	name: {type: Sequelize.STRING(20), unique: true},
	domain: {type: Sequelize.STRING},
	displayName: {type: Sequelize.STRING},
	locked: {type: Sequelize.BOOLEAN, defaultValue: false},
	note: {type: Sequelize.TEXT, defaultValue: ''},
	url: {type: Sequelize.STRING(512)},
	avatar: {type: Sequelize.UUID},
	avatarStatic: {type: Sequelize.UUID},
	header: {type: Sequelize.UUID},
	headerStatic: {type: Sequelize.UUID},
	followerCount: {type: Sequelize.INTEGER, defaultValue: 0},
	followingCount: {type: Sequelize.INTEGER, defaultValue: 0},
	statusesCount: {type: Sequelize.INTEGER, defaultValue: 0}
}, {
	indexes: [{fields: ['domain']}]
});

Account.Profile = Account.hasMany(model);


module.exports = model;