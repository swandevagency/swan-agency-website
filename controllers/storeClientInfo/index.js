const mongoose = require('mongoose')


module.exports = async (req, res) =>{
    const {name, phoneNumber, email, instagramId, description} = req.body
    if(!name){
        return res.status(400).send({
            msg : 'please provide a name'
        })
    }
    if(!phoneNumber){
        return res.status(400).send({
            msg : 'please provide a phone number'
        })
    }
    const clientWithThisPhoneNumberAlreadyExist = await mongoose.model('Client').findOne({phoneNumber})
    if(clientWithThisPhoneNumberAlreadyExist){
        return res.status(400).send({
            msg : 'this phone number already exists'
        })
    }
    if(!email && !instagramId){
        return res.status(400).send({
            msg : 'please provide an email or an instagram id'
        })
    }
    try {
        const client = new mongoose.model('Client')({
            name,
            phoneNumber,
            email,
            instagramId,
            description
        })
        await client.save()
        res.status(200).send({
            msg : 'client stored'
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            msg : 'something went wrong'
        })
    }
}