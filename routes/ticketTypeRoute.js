const TicketType = require('../models/TicketType');
const Ticket = require('../models/Ticket');

module.exports = (app) => {
	// create ticket type
	app.post('/api/type/:id', async (req, res) => {
		const { tictype } = req.body;
		const ticketId = req.params.id;

		const ticketType = new TicketType({
			tictype
		});

		try {
			await ticketType.save();
			const ticket = await Ticket.findById(ticketId);
			ticket.ticketType = ticketType;

			const newTicket = await ticket.save();
			res.send(ticketType);
		} catch (error) {
			res.status(422).send(error);
		}
  });
  
  app.put('/api/type/:id', async (req, res) => {
    const ticketTypeId = req.params.id;
    let data = req.body;

    const ticketType = await TicketType.findByIdAndUpdate({ _id: ticketTypeId }, { $set: data }, { new: true });

    try {
      res.status(200).send(ticketType);
    } catch (error) {
      res.status(400).send(error);
    }
  });
};
