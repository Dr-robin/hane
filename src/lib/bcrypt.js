const bcrypt = require('bcrypt-nodejs');

module.exports = {
	hash(data, salt = null) {
		return new Promise((success, fail) => {
			bcrypt.hash(data, salt, null, (err, result) => {
				!err ? success(result): fail(err);
			});
		});
	},
	compare(data, hash) {
		return new Promise((success, fail) => {
			bcrypt.compare(data, hash, (err, result) => {
				!err ? success(result): fail(err);
			});
		});
	}
};