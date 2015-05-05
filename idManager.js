var _ = require('underscore');

var lastId;

function setIds(data) {
	var ids = [];

	if (_.isArray(data)) {
		ids = _.pluck(data, '_id');
		lastId = _.max(ids);
	}
}

function getId() {
	var newId = lastId + 1;
	
	return newId;
}

module.exports = {
	setIds: setIds,
	getId: getId
};