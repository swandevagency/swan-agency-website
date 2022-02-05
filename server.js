const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const port = 5000
const cors = require('cors')

mongoose.connect('mongodb://localhost:27017/swan-website',{useNewUrlParser : true})
.then(() =>{
    console.log('database is connected')
})

// require('./models/index')

// const test = new mongoose.model('EnOurWorkContent')({
//     clientName : 'gubrali',
//     description : 'gubralitiz'
// })
// test.save()
// const test2 = new mongoose.model('FaOurWorkContent')({
//     clientName : 'گوبرلی',
//     description : 'گوبرلی'
// })
// test2.save()

// const test3 = new mongoose.model('OurWork')({
//     projectName : 'project',
//     for : '61f69c483b2d194036ff4e9e',
//     clientImage : 'asklhfdsakgh',
//     backgroundImage : 'ajsfhadgkhakgjksgjad',
//     images : ['fkalsjkalsgjd','fhdaskjfdsaklgsaklg'],
//     ourWorkContent : {
//         en : test._id,
//         fa : test2._id
//     }
// })
// test3.save()

app.use(express.json())

app.use(cors({origin : '*'}))

app.use(bodyParser.urlencoded({extended : true}))

app.use('/',require('./routes/index'))

app.listen(port, ()=>{
    console.log('server is running on port 5000')
})