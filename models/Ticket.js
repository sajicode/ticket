const mongoose = require('mongoose');
const { Schema } = mongoose;

const ticketSchema = new Schema({
	event: {
		type: String,
		required: true
	},
	venue: {
		type: String,
		required: true
	},
	eventDate: {
		type: Date,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now().toString()
	}
});

module.exports = mongoose.model('tickets', ticketSchema);
