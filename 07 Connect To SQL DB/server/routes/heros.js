//ייבוא ספריות יצירת האובייקט
const HerosRoute = require('express').Router();
const Hero = require('../models/heroModel');

HerosRoute.get('/', async (req, res) => {
    try {
        let heros = await Hero.GetAll();
        res.status(200).json(heros);
    } catch (error) {
        res.status(500).json(error);
    }
});

HerosRoute.get('/:id', async (req, res) => {
    try {
        let { id } = req.params;
        let heros = Hero.GetById(id);
        res.status(200).json(heros);
    } catch (error) {
        res.status(500).json(error);
    }
});

HerosRoute.post('/add', async (req, res) => {
    try {
        let { nickname, first_name, last_name, abilities } = req.body;
        let heros = await Hero.Add(nickname, first_name, last_name, abilities);
        res.status(200).json(heros);
    } catch (error) {
        res.status(500).json(error);
    }

});



//ייצא את הראוטר
module.exports = HerosRoute;