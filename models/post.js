const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    author: String,
    title: String,
    time: { type : Date, default: Date.now },
    content: String,
    attachment: String
}, { collection: 'Post' });

mongoose.model('Post', postSchema);