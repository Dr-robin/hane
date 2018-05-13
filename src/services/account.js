const db = require('../lib/db');
const bcrypt = require('../lib/bcrypt');
const Boom = require('boom');
const SessionService = require('./session');

module.exports = {
	async create(email, password, username) {
		if(await db.get('account').findOne({email: {$in: [email]}})) {
			throw Boom.badRequest('Email already registered');
		}
		else if(await db.get('profile').findOne({username: username, local: true})) {
			throw Boom.badRequest('Username already registered');
		}
		let account = await db.get('account').insert({email: [email], password: await bcrypt.hash(password)});
		await db.get('profile').insert({account: account._id, username: username, local: true});
	},
	async login(email, password) {
		let account = await db.get('account').findOne({email: {$in: [email]}});
		if(!account) {
			throw Boom.unauthorized('Invalid credentials');
		}
		if(!await bcrypt.compare(password, account.password)) {
			throw Boom.unauthorized('Invalid credentials');
		}
		return await SessionService.create(account._id);
	}
};