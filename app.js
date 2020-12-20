const express = require('express')
const exphbs = require('express-handlebars')
// import handlebars 'is' helper
const helpers = require('handlebars-helpers')()
// import rubbish_generator.js
const generateRubbish = require('./rubbish_generator')
const helperIs = helpers.is()
const app = express()
const port = 3000

// setting handlebars as view engine，and Helper Is Function
app.engine('handlebars', exphbs({ helpers: helperIs, defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

// use body-parser
app.use(express.urlencoded({ extended: true }))

// routes setting
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const role = req.body.targets
  const nonsense = generateRubbish(role)
  res.render('index', { nonsense, role })
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})
