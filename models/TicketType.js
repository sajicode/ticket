const mongoose = require('mongoose');
const { Schema } = mongoose;

const ticketTypeSchema = Schema({
	ticketType: String
});

module.exports = ticketTypeSchema;
