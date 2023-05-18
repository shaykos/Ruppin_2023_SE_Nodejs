const Character = require('../models/characters');
const characterRoute = require('express').Router();


characterRoute.get('/', async (req, res) => {
    try {
        let data = await Character.FindAllCharacters();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error });
    }
});

characterRoute.get('/:id', async (req, res) => {
    try {
        let { id } = req.params;
        let data = await Character.FindById(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error });
    }
});

characterRoute.post('/add', async (req, res) => {
    try {
        let { charater_name, age, actor } = req.body;
        let data = await new Character(charater_name, age, actor).InsertOne();
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error });
    }
});


module.exports = characterRoute;