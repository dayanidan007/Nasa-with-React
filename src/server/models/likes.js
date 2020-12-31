const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LikesSchema = new Schema({
    title: String,
    mediaType: String,
    media: String,
    location: String,
    date: String,
    secondary: String,
    description: String,
})

const Likes = mongoose.model("Likes", LikesSchema)

module.exports = Likes