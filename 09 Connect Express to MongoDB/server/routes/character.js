const CharacterRoutses = require('express').Router();
const CharacterModel = require('../models/charatersModel');

CharacterRoutses.get('/', async (req, res)=>{
    try {
        let data = await CharacterModel.FindAllCharacter();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({error});
    }
});

CharacterRoutses.get('/:id', async (req, res)=>{
    try {
        let {id} = req.params;
        let data = await CharacterModel.FindCharacter(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({error});
    }
});


//export
module.exports = CharacterRoutses;