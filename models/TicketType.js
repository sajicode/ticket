const mongoose = require('mongoose');
const { Schema } = mongoose;

const ticketTypeSchema = Schema({
	ticketType: String
});

mongoose.model = ('ticketType', ticketTypeSchema);

module.exports = ticketTypeSchema;
