const mongoose = require('mongoose')

const EnBlogContentSchema = new mongoose.Schema({
    title : {
        type : "string"
    },
    description : {
        type : "string"
    }
})

module.exports = EnBlogContentSchema