const router = require('express').Router()

const {fethcPagesInfo}   = require('../controllers/index')
const {fetchOurWorkInfo} = require('../controllers/index')
const {storeClientInfo}  = require('../controllers/index')


router.get('/homepage/:lang',fethcPagesInfo)

router.get('/ourwork/:lang/:id',fetchOurWorkInfo)

router.post('/client',storeClientInfo)


module.exports = router