const db = require('../lib/db');
const uuid = require('uuid/v4');

module.exports = {
	async create(accountID) {
		let sessionID = uuid();
		await db.get('session').insert({account: accountID, sessionID});
		return sessionID;
	}
};