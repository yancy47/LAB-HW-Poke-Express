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

// Load our pokemon data from models folder 
// const pokemon = require('./models/pokemon') // don't need it here anymore 

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

// look for static files (like css) in the public folder
app.use(express.static('public'))

// create a custom middleware for logging the HTTP Method and path 
app.use((req, res, next) => {               // 2:21:31 removed console.logs to show an custom middleware // 2:24 created custom middleware //  middleware is basically a function that runs in between right in the middle step. So we'll pass it a function So the call back function right and it take req res and a distant cousin called next  ((req, res, next) 
    console.log('inside middleware')
    console.log(`${req.method} ${req.path}`) // 2:26:33 And we actually have access to both these things and our request objects. So if I do temple literal click request that method will show us POST, GET,  right, ${req.method}  depending on what type of method it is and we also have the path ${req.path}`
    next()    // 2:27:54 what's the point of our cousin? we use the next as a function. So it's a function that we call when we want to move on to the next. the next thing So next, in this case would probably be the route itself. Right? So your console log we first run the middleware because it comes first right? So then, in our case we don't really have any other middleware except to the routes. so it would move on to the routes event before the logic and the controller.
})

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