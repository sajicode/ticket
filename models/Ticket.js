const mongoose = require('mongoose');
const { Schema } = mongoose;
const TicketTypeSchema = require('./TicketType');

const ticketSchema = new Schema({
	event: {
		type: String,
		required: true
	},
	venue: {
		type: String,
		required: true
	},
	ticketType: TicketTypeSchema,
	eventDate: {
		type: Date,
		required: true
	}
});

mongoose.model('tickets', ticketSchema);
