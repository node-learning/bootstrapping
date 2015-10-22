var user = new Map();

module.exports = {
	set(key, value) {
		user.set(key, value);
	},

	get(key) {
		return user.get(key);
	}
};
