const PokemonModel = require('../models/pokemon.model');

const PokemonRoute = require('express').Router();

PokemonRoute.get('/', async (req, res) => {
    try {
        let data = await PokemonModel.GetAllPlayers();
        if (!data)
            res.status(404).json({ msg: 'not found' });
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error });
    }
});

PokemonRoute.get('/find/:family', async (req, res) => {
    try {
        let {family} = req.params;
        let data = await PokemonModel.FindPokemonsByFamily(family);
         if(!data)
             res.status(404).json({msg: 'not found'});
         res.status(200).json(data);
        res.end();
    } catch (error) {
        res.status(500).json({ error });
    }
});

PokemonRoute.post('/add/pokemon', async (req, res) => {
    try {
        let { pokemons } = req.body;
        let data = await PokemonModel.InsertPokemons(pokemons);
        if (!data)
            res.status(404).json({ msg: 'not found' });
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error });
    }
});

PokemonRoute.delete('/delete/:id', async (req, res) => {
    try {
        let { id } = req.params;
        let data = await PokemonModel.DeletePokemon(id);
        if (!data)
            res.status(404).json({ msg: 'not found' });
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error });
    }
});

PokemonRoute.put('/active/:id', async (req, res) => {
    try {
        let { id } = req.params;
        let data = await PokemonModel.ReactivePokemon(id);
        if (!data)
            res.status(404).json({ msg: 'not found' });
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error });
    }
});


module.exports = PokemonRoute;