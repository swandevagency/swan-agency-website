const mongoose = require('mongoose')

const enPageContentSchema = new mongoose.Schema({
    pageName : {
        type : "string"
    },
    description : {
        type : "string"
    }
})

module.exports = enPageContentSchema