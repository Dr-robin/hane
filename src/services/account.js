const bcrypt = require('../lib/bcrypt');
const Boom = require('boom');
const Account = require('../models/account');
const AccountEmail = require('../models/accountEmail');
const Profile = require('../models/profile');
const SessionService = require('./session');

module.exports = {
	async create(email, password, username) {
		if(await AccountEmail.findById(email)) {
			throw Boom.badRequest('Email already registered');
		}
		else if(await Profile.findOne({where: {name: username, isLocal: true}})) {
			throw Boom.badRequest('Username already registered');
		}
		let account = await Account.create({
			accountEmails: [{email}],
			profiles: [{name: username, isLocal: true}],
			password: await bcrypt.hash(password)
		}, {include: [AccountEmail, Profile]});
		console.log(account);
	},
	async login(email, password) {
		let account = await Account.findOne({include: [{model: AccountEmail, where: {email}}]});
		if(!account) {
			throw Boom.unauthorized('Invalid credentials');
		}
		if(!await bcrypt.compare(password, account.password)) {
			throw Boom.unauthorized('Invalid credentials');
		}
		return await SessionService.create(account.no);
	}
};