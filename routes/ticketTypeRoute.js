const TicketType = require('../models/TicketType');

module.exports = (app) => {
	// create ticket type
	app.post('/api/type', async (req, res) => {
		const { tictype } = req.body;

		const ticketType = new TicketType({
			tictype
		});

		try {
			await ticketType.save();
			res.send(ticketType);
		} catch (error) {
			res.status(422).send(error);
		}
	});
};
