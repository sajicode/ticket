const mongoose = require('mongoose');
const Ticket = mongoose.model('tickets');
const TicketType = mongoose.model('ticketType');

// create ticket
module.exports = (app) => {
	app.post('/api/ticket', async (req, res) => {
		const { event, venue, ticketType, eventDate } = req.body;

		const ticket = new Ticket({
			event,
			venue,
			ticketType: { ticketType },
			eventDate: Date.now(eventDate)
		});

		try {
			await ticket.save();
			res.send(ticket);
		} catch (error) {
			res.status(422).send(error);
		}
	});
};
