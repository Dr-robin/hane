const RouteManager = require('../lib/router');
const joi = require('joi');
const AccountSchema = require('../schema/account');

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
		return {success: true};
    }
});

module.exports = router;
