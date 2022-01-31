const mongoose = require('mongoose')

const ourWorkSchema = new mongoose.Schema({
    projectName : {
        type : "string",
        unique : true
    },
    for : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Page'
    },
    clientImage : {
        
    },
    backgroundImage : {
        type : "string"
    },
    images : [],
    ourWorkContent : {
        en : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'EnOurWorkContent'
        },
        fa : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'FaOurWorkContent'
        }
    }
})

module.exports = ourWorkSchema