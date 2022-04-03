const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const port = 5000
const cors = require('cors')

mongoose.connect('mongodb://127.0.0.1:27017/swanagc',{useNewUrlParser : true})
.then(() =>{
    console.log('database is connected')
})


app.use(express.json())

app.use(cors({origin : '*'}))

app.use(bodyParser.urlencoded({extended : true}))

app.use('/api',require('./routes/index'))

app.listen(port, ()=>{
    console.log('server is running on port 3000')
})