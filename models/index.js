const mongoose = require('mongoose')

const pageSchema = require('./pages/index')
const ourWorkSchema = require('./OurWork/index')
const clientSchema = require('./Client/index')
const enPageContentSchema = require('./EnPageContent/index')
const faPageContentSchema = require('./FaPageContent/index')
const EnOurWorkContentSchema = require('./EnOurWorkContent/index')
const FaOurWorkContentSchema = require('./FaOurWorkContent/index')






mongoose.model('Page',pageSchema)
mongoose.model('OurWork',ourWorkSchema)
mongoose.model('Client',clientSchema)
mongoose.model('EnPageContent',enPageContentSchema)
mongoose.model('FaPageContent',faPageContentSchema)
mongoose.model('EnOurWorkContent',EnOurWorkContentSchema)
mongoose.model('FaOurWorkContent',FaOurWorkContentSchema)
