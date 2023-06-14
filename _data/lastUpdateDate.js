module.exports = {
	get(){
		const t = (new Date()).toUTCString();
		return "<time datetime='" + t + "'>" + t + " </time>";
	}
};
