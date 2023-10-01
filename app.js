const path = require('path')
const dotenv = require('dotenv')
const express = require('express')
const indexRoutes = require('./routes/indexRoutes')

dotenv.config()

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRoutes)

app.listen(3000, () => console.log('listening to port 3000'))