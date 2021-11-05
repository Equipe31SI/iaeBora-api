const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config()

const index = require('./routes/index')
const events = require('./routes/event')
const admin = require('./routes/admin')
const login = require('./routes/login')

const app = express()
app.use(cors())

mongoose.connect(`${process.env.DATABASE}`,err => {
  if(err) throw err;
  console.log('Connected to MongoDB')
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', index)
app.use('/events', events)
app.use('/admin', admin)
app.use('/login', login)

module.exports = app
