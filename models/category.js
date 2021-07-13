const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
    CategoryID: Number,
    CategoryName: String,
    Description: String,
    Picture: String,
    Undefined: String,
})

module.exports = mongoose.model('Category', categorySchema)