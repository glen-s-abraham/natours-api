
const mongoose = require('mongoose')

const tourSchema=mongoose.Schema({
    name:String,
    price:Number,
    ratings:Number
})

const Tour = mongoose.model('Tour',tourSchema)

module.exports = Tour