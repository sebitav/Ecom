// models/productModels.js

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  // Otros campos relevantes para el producto
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
