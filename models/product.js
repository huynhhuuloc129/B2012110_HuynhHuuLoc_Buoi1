const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
});

const product = mongoose.model('product', productSchema);
module.exports = product;