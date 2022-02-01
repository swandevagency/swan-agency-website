const mongoose = require('mongoose')

const faPageContentSchema = new mongoose.Schema({
    pageName : {
        type : "string"
    },
    description : {
        type : "string"
    }
})

module.exports = faPageContentSchema