const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema({
    name : {
        type : "string",
        required : true
    },
    phoneNumber : {
        type : "string",
    },
    email : {
        type : "string"
    },
    instagramId : {
        type : "string"
    },
    description : {
        type : "string",
        maxlength : 150
    }
})

module.exports = clientSchema