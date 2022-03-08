const mongoose = require('mongoose')

const Schema = mongoose.Schema

const blogSchema = new Schema({
    creator: String,
    title: String,
    desc: String,
    hashtags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog