const passport = require('passport')

var GoogleStrategy = require('passport-google-oauth20')

const userInfo = () => {
    console.log('user info')

    const options = {
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: 'http://localhost:3000/oauth2/redirect/google',
        scope: ['profile'],
        state: true
    }

    const verify = (accessToken, refreshToken, profile, cb) => {
        console.log(profile)
    }

    passport.use(new GoogleStrategy(options, verify))

}

const login = (req, res) => {
    res.render('login')
}

module.exports = {
    userInfo,
    login
}