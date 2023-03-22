// Load express
const express = require('express')

// Setup our Express app
const app = express()

const PORT = 3000

// Load our pokemon data from models folder
const pokemon = require('./models/pokemon')

// // Load our pokemon routes
// const pokemonRoutes = require('./routes/pokemonRoutes')

// Load the create engine -> (npm install jsx-view-engine react react-dom)
const { createEngine } = require('jsx-view-engine')

// Load the method-override middleware
const methodOverride = require('method-override')

// Configure the view engine and look for files ending in jsx
app.set('view engine', 'jsx')

// Create the engine and accept files ending in jsx
app.engine('jsx', createEngine())

// a middleware that formats the form data (currently a string that looks like query params) into a object we can use
app.use(express.urlencoded({ extended: true }))

// hack into our form and give it more HTTP methods (like DELETE and PUT)
app.use(methodOverride('_method'))

// // Connect our routes to our express app
// app.use('/fruits', fruitRoutes)

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Pokemon App!</h1>')  //response object with 'send' method
})

// Listen to the given port
app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})