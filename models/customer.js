const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
});

const customer = mongoose.model('customer', customerSchema);
module.exports = customer;