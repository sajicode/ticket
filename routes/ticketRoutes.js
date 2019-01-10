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

	app.get('/api/ticket', async (req, res) => {
		const tickets = await Ticket.find().populate('ticketType');

		try {
			res.status(200).send(tickets);
		} catch (error) {
			res.status(400).send(error);
		}
	});
};
