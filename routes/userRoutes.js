const express = require('express')
const {
    userInfo,
    login
} = require('../controllers/userControllers')


const router = express.Router()

router.route('/info').get(userInfo)
router.route('/login').get(login)

module.exports = router