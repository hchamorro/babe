const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: String,
  seller: String,
  description: String,
  short_description: String,
  thumbnail_url: String,
  img_url: [{ img: String }],
  price: Number,
  post_date: { type: Date, default: Date.now }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
