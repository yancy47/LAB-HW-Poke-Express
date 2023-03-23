// Require dotenv to setup environment variables in our server
require('dotenv').config()

// Load express
const express = require('express')
const pokemon = require('./models/pokemon')

// Setup our Express app
const app = express()

const PORT = 3000

// Load the connectDB function
const connectDB = require('./config/db')

// Connect to database
connectDB()

// Load our pokemon data from models folder // don't need it here anymore 
// const pokemon = require('./models/pokemon')

// Load our pokemon routes
const pokemonRoutes = require('./routes/pokemonRoutes')

// (npm install jsx-view-engine react react-dom)
// Load the create engine 
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

// Connect our routes to our express app
app.use('/pokemon', pokemonRoutes)

// moved this to pokemonRoutes.js 
// Setup an "index" route for pokemon
// app.get('/pokemon', (req, res) => {
//     res.send(pokemon)
// })

// moved this to pokemonRoutes.js too
// // Setup a "show" route for pokemon
// app.get('/pokemon/:id', (req, res) => {
//     res.send(pokemon[req.params.id])
// })

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Pokemon App!</h1>')  //response object with 'send' method
})

// Listen to the given port
app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})

/*
NOTES 
npm i mongoose
npm i dotenv
*/