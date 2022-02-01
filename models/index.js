const mongoose = require('mongoose')

const pageSchema = require('./pages/index')
const enPageContentSchema = require('./pages/EnPageContent/index')
const faPageContentSchema = require('./pages/FaPageContent/index')


const ourWorkSchema = require('./OurWork/index')
const EnOurWorkContentSchema = require('./OurWork/EnOurWorkContent/index')
const FaOurWorkContentSchema = require('./OurWork/FaOurWorkContent/index')


const blogSchema = require('./blog/index')
const EnBlogContentSchema = require('./blog/EnBlogContent/index')
const FaBlogContentSchema = require('./blog/FaBlogContent/index')


const clientSchema = require('./Client/index')





mongoose.model('Page',pageSchema)
mongoose.model('EnPageContent',enPageContentSchema)
mongoose.model('FaPageContent',faPageContentSchema)


mongoose.model('OurWork',ourWorkSchema)
mongoose.model('EnOurWorkContent',EnOurWorkContentSchema)
mongoose.model('FaOurWorkContent',FaOurWorkContentSchema)


mongoose.model('Blog',blogSchema)
mongoose.model('EnBlogContent',EnBlogContentSchema)
mongoose.model('FaBlogContent',FaBlogContentSchema)


mongoose.model('Client',clientSchema)