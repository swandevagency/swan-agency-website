const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title : {
        type : "string"
    },
    createdAt : {
        type : Date,
        default : Date.now
    },
    blogContent : {
        en : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'EnBlogContent'
        },
        fa : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'FaBlogContent'
        }
    },
    thumbnail : {
        type : "string"
    },
    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Page'
    }
})


module.exports = blogSchema