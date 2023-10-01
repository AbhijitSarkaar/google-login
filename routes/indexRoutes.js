const express = require('express')
const {
    userInfo,
    login,
    googleLogin
} = require('../controllers/indexControllers')

const router = express.Router()

router.route('/info').get(userInfo)
router.route('/login').get(login)
router.route('/login/google').get(googleLogin)

module.exports = router