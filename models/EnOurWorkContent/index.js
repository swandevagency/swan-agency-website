const mongoose = require('mongoose')

const EnOurWorkContentSchema = new mongoose.Schema({
    clientName : {
        type : "string"
    },
    description : {
        type : "string"
    }
})

module.exports = EnOurWorkContentSchema