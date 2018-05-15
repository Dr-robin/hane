const Profile = require('../models/profile');
const urlMaker = require('./urlmaker');

module.exports = {
	render(model) {
		return {
			id: model.id,
			username: model.username,
			acct: model.domain ? `${model.username}@${model.domain}` : model.username,
			display_name: model.displayName,
			locked: model.locked,
			created_at: model.createdAt,
			followers_count: model.followerCount,
			following_count: model.followingCount,
			statuses_count: model.statusesCount,
			note: model.note,
			url: model.url,
			avatar: urlMaker.avatar(model.avatar),
			avatar_static: urlMaker.avatar(model.avatarStatic || model.avatar),
			header: urlMaker.avatar(model.header),
			header_static: urlMaker.avatar(model.headerStatic || model.header)
		};
	},
	async getProfileById(id) {
		return await Profile.findById(id);
	}
};