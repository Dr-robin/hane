const RouteManager = require('../lib/router');
const joi = require('joi');
const AccountSchema = require('../schema/account');
const AccountService = require('../services/account');

const router = new RouteManager();
router.add({
    url: '/sign-in',
    method: 'GET',
    async handler() {
        return {success: true};
    }
});
router.add({
    url: '/sign-in',
    method: 'POST',
    async handler(req) {
		joi.assert(req.body, AccountSchema.login);
		let sessionID = await AccountService.login(req.body.email, req.body.password);
		return {sessionID};
    }
});

router.add({
	url: '/sign-up',
	method: 'POST',
	async handler(req) {
		joi.assert(req.body, AccountSchema.register);
		await AccountService.create(req.body.email, req.body.password, req.body.username);
	}
});

module.exports = router;
