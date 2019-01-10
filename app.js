const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/Ticket');

mongoose.connect(keys.MONGO_URI).then(() => console.log('connected to mongoose'));

const app = express();

app.use(bodyParser.json());

require('./routes/ticketRoutes')(app);
require('./routes/ticketTypeRoute')(app);

const PORT = keys.PORT;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
