const mongoose = require("mongoose")



const QuoteSchema = new mongoose.Schema({
    content:{
        type: String,
        required:[true, "Content is required!"],
        minLength: [3, "Quote content must be at least 3 chars"],
        maxLength: [100000000, "woah, we said quote, not lecture tho"]
    },

    author: {
        type: String,
        required: [true, "Author is required"]
    },

    quotedOn: {
        type: Date

    }


}, {timestamps:true})


const Quote = mongoose.model("Quote", QuoteSchema );

module.exports = Quote;