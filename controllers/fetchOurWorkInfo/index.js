const mongoose = require('mongoose')
const {ObjectId} = require('mongoose').Types

module.exports = async (req, res) =>{
    console.log('request received to ourwork info')
    const lnags = ['en','fa']
    if(lnags.indexOf(req.params.lang) ===-1){
        res.status(404).send({
            msg : 'this language is not available'
        })
        return
    }
    if(!ObjectId.isValid(req.params.id)){
        res.status(400).send({
            msg : 'invalid type for id'
        })
        return
    }
    const ourWork = await mongoose.model('OurWork').findOne({_id : req.params.id}).populate({path : `ourWorkContent.${req.params.lang}`})
    if(!ourWork){
        res.status(404).send({
            msg : 'no data ha been recorded with this id'
        })
        return
    }
    res.status(200).send({
        ourWork
    })


}