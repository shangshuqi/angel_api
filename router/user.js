const express = require('express')
const userCtrl = require('../controller/user')
const userValidator = require('../validator/user')
const auth = require('../middleware/auth')

const router = express.Router()


router.post('/users/login',userValidator.login, userCtrl.login)


router.post('/users/register',userValidator.register, userCtrl.register)
router.get('/users/ddd',auth, userCtrl.demo)


module.exports = router