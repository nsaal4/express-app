const express = require('express')
const mongoose = require('mongoose')
const expressValidator = require('express-validator')
const path = require('path')

// Init app
const app = express()
const port = 3000

// Set view engine and views path
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Set middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

// Init db connection to a database 'learn'
mongoose.connect('mongodb://localhost:27017/learn', {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection

// Check for db error
db.on('error', () => {
  console.log('Connection error')
})

// Check for db open
db.once('open', () => {
  console.log('Connected')
})

// Init models
const Category = require('./models/category')

// Home route
app.get('/', (req, res) => {
  Category.find({}, (err, categories) => {
    if (err) {
      console.error(err)
    } else {
      res.render('index', {categories: categories})
    }
  })
})

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
