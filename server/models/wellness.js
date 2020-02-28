const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wellnessSchema = new Schema({
    title: String,
    source: String,
    description: String,
    thumbnail_url: String,
    post_date: { type: Date, default: Date.now }
});

const Wellness = mongoose.model('Wellnes', wellnessSchema);

module.exports = Wellness;