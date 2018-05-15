const Profile = require('../models/profile');
const urlMaker = require('./urlmaker');

module.exports = {
	render(model) {
		return {
			id: model.id,
			username: model.name,
			acct: (model.domain ? `${model.name}@${model.domain}` : model.name),
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