const mongoose = require('mongoose')
require('../../models/index')

module.exports = async (req, res) =>{
    console.log('request received to page info')
    const langs = ['en','fa']
    if(langs.indexOf(req.params.lang) === -1){
        res.status(404).send({
            msg : 'this language is not available'
        })
        return
    }
    try {
        const pages = await mongoose.model('Page').find().populate({path : `pageContent.${req.params.lang}`})
        res.status(200).send({
            pages
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            msg : 'something went wrong'
        })
    }
}