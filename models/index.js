const mongoose = require('mongoose')

const pageSchema = require('./Pages/index')
const enPageContentSchema = require('./Pages/EnPageContent/index')
const faPageContentSchema = require('./Pages/FaPageContent/index')


const ourWorkSchema = require('./OurWork/index')
const EnOurWorkContentSchema = require('./OurWork/EnOurWorkContent/index')
const FaOurWorkContentSchema = require('./OurWork/FaOurWorkContent/index')


const blogSchema = require('./Blog/index')
const EnBlogContentSchema = require('./Blog/EnBlogContent/index')
const FaBlogContentSchema = require('./Blog/FaBlogContent/index')


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