const mongoose = require('mongoose')

const FaBlogContentSchema = new mongoose.Schema({
    title : {
        type : "string"
    },
    description : {
        type : "string"
    }
})

module.exports = FaBlogContentSchema