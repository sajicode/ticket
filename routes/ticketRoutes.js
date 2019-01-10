const Ticket = require('../models/Ticket');

module.exports = (app) => {
	// create ticket

	app.post('/api/ticket', async (req, res) => {
		const { event, venue, eventDate } = req.body;

		const ticket = new Ticket({
			event,
			venue,
			eventDate: new Date(eventDate)
		});

		try {
			await ticket.save();
			res.send(ticket);
		} catch (error) {
			res.status(422).send(error);
		}
	});
};
