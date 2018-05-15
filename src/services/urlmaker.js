const config = require('../lib/config');

module.exports = {
	profileURL(username) {
		return config.getValue('web.rootURL', 'http://localhost:8734') + '/@' + username;
	}
};