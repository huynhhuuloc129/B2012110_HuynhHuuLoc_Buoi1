const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
});

const staff = mongoose.model('staff', staffSchema);
module.exports = staff;