const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema({
    title: String,
    publisher: String,
    source: String,
    description: String,
    thumbnail_url: String,
    post_date: { type: Date, default: Date.now },
    tags: String,
});

const News = mongoose.model('News', newsSchema);

module.exports = News;