const joi = require('joi');

module.exports = {
	login: {
		email: joi.string().email().required(),
		password: joi.string().required()
	},
	register: {
		email: joi.string().email().required(),
		password: joi.string().min(6).required(),
		username: joi.string().min(4).max(20).regex(/^[a-zA-Z0-9_]+$/).required()
	}
};