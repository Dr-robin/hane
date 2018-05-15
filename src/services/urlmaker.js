const config = require('../lib/config');

module.exports = {
	profileURL(username) {
		return config.getValue('web.rootURL', 'http://localhost:8734') + '/@' + username;
	},
	avatar(id) {
		if(id) {
			return config.getValue('web.storageURL', 'http://localhost:8734') + '/' + id;
		}
		else {
			return config.getValue('web.rootURL', 'http://localhost:8734') + '/assets/noavatar.png';
		}
	}
};