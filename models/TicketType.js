const mongoose = require('mongoose');
const { Schema } = mongoose;

const ticketTypeSchema = new Schema({
	tictype: String,
	createdAt: {
		type: Date,
		default: Date.now().toString()
	}
});

module.exports = mongoose.model('ticketTypes', ticketTypeSchema);
