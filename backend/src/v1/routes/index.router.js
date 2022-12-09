const { Router } = require('express')
const router = Router()
const { SendContact } = require('../controllers/index.controller')

router.post('/contact', SendContact)

module.exports = router