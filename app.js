const path = require('path')
const dotenv = require('dotenv')
const express = require('express')
const userRoutes = require('./routes/userRoutes')

dotenv.config()

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.send('hello world')
})

app.use('/users', userRoutes)

app.listen(3000, () => console.log('listening to port 3000'))