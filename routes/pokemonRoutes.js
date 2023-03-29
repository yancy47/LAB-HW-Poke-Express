const express = require('express')
const pokemon = require('../models/pokemon')

// Creates our router
const router = express.Router()

// Loads our pokemon from models folder
// const pokemon = require('../models/pokemon')

// Load our controller and its route logic
const pokemonController = require('../controllers/pokemonController')

// // Setup an "index" route for pokemon and attaching it to router object
// router.get('/', (req, res) => { 
//     res.send(pokemon)
// })

// // This call back function in lines 14-16 gets deleted 
// // (req, res) => {    
// //     res.send(pokemon)
// // })

// // now it should just be line 24
// router.get('/', pokemonController.index)


// // Setup a "show" route for pokemon, attach it to router
// router.get('/:id', (req, res) => { 
//     res.send(pokemon[req.params.id])
// })

// // same thing here callback function logic in lines 28-30 not needed either so removed 
// // (req, res) => {    
// //     res.send(pokemon[req.params.id])
// // })

// // now it should just be line 38
// router.get('/:id', pokemonController.show)

// I.N.D.U.C.E.S  ->  an acronym that helps remember how to properly order routes
// Index, New, Delete, Update, Create, Edit, Show

// Setup an "index" route for pokemon, attach it to router along with the controller logic
router.get('/', pokemonController.index)

// Setup a "new" route for creating pokemon
router.get('/new', pokemonController.new)

// Setup a "clear" route for removing all data from pokemon collection
router.delete('/clear', pokemonController.clear)

// Setup a "delete" route for removing a specific pokemon
router.delete('/:id', pokemonController.delete)   

// Setup a "update" route for updating a specific pokemon
router.put('/:id', pokemonController.update)

// Setup a "seed" route for repopulating our database
router.post('/seed', pokemonController.seed)        

// Setup a "create" route for adding pokemon data
router.post('/', pokemonController.create)

// Setup a "edit" route for editing a pokemeon
router.get('/:id/edit', pokemonController.edit)

// Setup an "show" route for pokemon, attach it to router along with the controller logic
router.get('/:id', pokemonController.show)     


module.exports = router