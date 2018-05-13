const joi = require('joi');

module.exports = {
	login: {
		email: joi.string().email().required(),
		password: joi.string().required()
	}
};