// Loads our pokemon data here 
const pokemon = require('../models/pokemon')

// The callback function originally the second argument from -> app.get('/', () => {})
module.exports.index = (req, res) => {
    // res.send(pokemon)
    // res.render('pokemon/Index')
    res.render('pokemon/Index', { pokemon })
    
}

// Those anonymous callback functions now have names: "index" and "show"
module.exports.show = (req, res) => {
    // res.send(pokemon[req.params.id])
    // res.render('pokemon/Show')
    res.render('pokemon/Show',{ pokemon: pokemon[req.params.id] })
}

// GET /fruits/new  
module.exports.new = (req, res) => {
    res.render('pokemon/New')
}

// POST /fruits
module.exports.create = (req, res) => {
    console.log('POST /pokemon')
    console.log(req.body)
    pokemon.push(req.body)
    // res.send('data recieved')
    res.redirect('/pokemon')

}
// module.exports = { index, show }  // not needed anymore 