const RouteManager = require('../lib/router');
const joi = require('joi');
const Boom = require('boom');
const Profile = require('../services/profile');

const router = new RouteManager();

// Mastodon API - Accounts
router.add({
    url: '/accounts/:id',
    method: 'GET',
    async handler(req) {
        let profile = await Profile.getProfileById(req.params.id);
        if(!profile) {
        	throw Boom.notFound('Account not found');
        }
		return Profile.render(profile.dataValues);
    }
});

module.exports = router;
