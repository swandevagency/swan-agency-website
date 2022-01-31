const mongoose = require('mongoose')

const pageSchema = new mongoose.Schema({
    pageName : {
        type : "string",
        unique : true
    },
    backgroundImage : {

    },
    images : [],
    pageContent : {
        en : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'EnPageContent'
        },
        fa : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'FaPageContent'
        }
    },
    ourWork : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'OurWork'
        }
    ]
})


module.exports = pageSchema