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
	ticketType: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'ticketTypes'
	},
	createdAt: {
		type: Date,
		default: Date.now().toString()
	}
});

ticketSchema.pre('remove', function(next) {
	let Ticket = this;

	const TicketType = mongoose.model('ticketTypes');
	TicketType.remove({
		_id: {
			$in: Ticket.ticketType
		}
	}).then(() => next());
});

module.exports = mongoose.model('tickets', ticketSchema);
