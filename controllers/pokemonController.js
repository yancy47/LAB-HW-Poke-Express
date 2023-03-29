// Loads our pokemon data here 
const pokemon = require('../models/pokemon')

// Load the pokemon model
const Pokemon = require('../models/PokemonModel')

// The callback function originally the second argument from -> app.get('/', () => {})
module.exports.index= async (req, res) => {
    // res.send(pokemon)
    // res.render('pokemon/Index')
     // res.render('pokemon/Index', { pokemon })
    const result = await Pokemon.find()
    console.log(result)
    res.render('pokemon/Index', { pokemon:result })  
   
    
}

// Those anonymous callback functions now have ids: "index" and "show"
module.exports.show= async(req, res) => {
    // res.send(pokemon[req.params.id])
    // res.render('pokemon/Show')
    console.log(req.params.id) 
    // res.render('pokemon/Show',{ pokemon: pokemon[req.params.id] })

    try {
    const pokemon = await Pokemon.findById(req.params.id)
    console.log(pokemon)
    res.render('pokemon/Show',{ pokemon: pokemon})
    } catch(err){
        console.log('error is' ,err)
    }
}

// GET /pokemon/new   
module.exports.new= (req,res) => {
res.render('pokemon/New')
}

// POST /pokemon  
module.exports.create= async (req,res) => {
    // res.send('data received') 
    // console.log('POST /pokemon')
    console.log(req.body) 
    pokemon.push(req.body) 

    try {
        const result = await Pokemon.create(req.body)
        console.log(result)
    }catch(err){
        console.log('error is' ,err)
    }

    res.redirect('/pokemon')
    }

//DELETE /pokemon/:id
module.exports.delete = async (req, res) => {
    // console.log('DELETE /pokemon/:id')   
    console.log(req.params)                
    // res.send('deleted succesfully')        
    // let index = pokemon.findById(req.params.id)  
    // console.log(index)         
    // pokemon.splice(index, 1)  

    try{
        await Pokemon.findByIdAndDelete(req.params.id)
        res.redirect('/pokemon')
    }catch(err) {
    console.log(err)
    res.send(err.message)
    }
}

// GET /pokemon/:id/edit
module.exports.edit = async (req, res) => {
    // console.log('GET /pokemon/:id/edit')
    // let index = pokemon.findById(req.params.id) 
    // res.render('pokemon/Edit', { pokemon: pokemon[index] })  
    try {
      const pokemon = await Pokemon.findById(req.params.id)
      res.render('pokemon/Edit', { pokemon: pokemon})      
    }catch(err){
        console.log(err)
        res.send(err.message)
    }
}

// PUT /pokemon/:id
module.exports.update =async (req, res) => {
    // console.log('PUT /pokemon/:id')
    console.log(req.body)   
    // let index = pokemon.findById(req.params.id)
    // pokemon[index] = req.body 

    // pass the id to find the document in the db and the form data (req.body) to update it
    try{
        await Pokemon.findByIdAndUpdate(req.params.id, req.body) 
        res.redirect(`/pokemon/${req.params.id}`) // redirect to show page not the index
    } catch(err){
        console.log(err)
        res.send(err.message)
    }   
}

// POST /pokemon/seed
module.exports.seed = async (req, res) => {
    // console.log('POST /pokemon/seed')
    try {
        await Pokemon.deleteMany({}) 
        await Pokemon.create(pokemon)  
        res.redirect('/pokemon') 
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}

// DELETE /pokemon/clear
module.exports.clear = async (req, res) => {
// console.log('DELETE /pokemon/clear')   
    try {
        await Pokemon.deleteMany({})
        res.redirect('/pokemon')         
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}

// module.exports = { index, show }  

