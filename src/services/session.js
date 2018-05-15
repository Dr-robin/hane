const Session = require('../models/session');

module.exports = {
	async create(accountNo) {
		let session = await Session.create({accountNo});
		return session.id;
	}
};