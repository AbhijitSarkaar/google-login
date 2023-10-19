const userInfo = (req, res) => {
    res.send('user info')
}

const login = (req, res) => {
    res.render('login')
}

const googleLogin = (req, res) => {
    res.send('google login')
}

module.exports = {
    userInfo,
    login,
    googleLogin
}