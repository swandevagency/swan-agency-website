const mongoose = require('mongoose')

const FaOurWorkContentSchema = new mongoose.Schema({
    clientName : {
        type : "string"
    },
    description : {
        type : "string"
    }
})

module.exports = FaOurWorkContentSchema