//ייבוא ספריות
const express = require('express');
const path = require('path');

//הגדרת הפורט
const PORT = process.env.PORT || 8000;

//יצירת השרת 
const server = express();
server.use(express.json());

//routes יצירה של 
server.get(`^/$|index(.html)?`, async (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'views', 'index.html'));
});

server.get(`/about(.html)?`, async (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'views', 'about.html'));
});

server.get(`/users`, async (req, res) => {
    let users = [
        { id: 1, name: "kookoo" },
        { id: 2, name: "looloo" }
    ];

    res.status(200).json(users);
});

server.get(`/users/:name`, async (req, res) => {
    let { name } = req.params;
    //let name = req.params.name; 

    let users = [
        { id: 1, name: "kookoo" },
        { id: 2, name: "looloo" }
    ];

    let user = users.find((u) => u.name == name);

    if (user)
        res.status(200).json(user);
    else
        res.status(404).json({ msg: 'user not found' });
});

server.post(`/users/add`, async(req, res)=>{
    let users = []
    //שליפת המידע מתוך הבקשה
    let {id, name} = req.body;
    //יצירת אובייקט של משתמש
    let u = {id, name};
    //הוספה של האובייקט למערך
    users.push(u);
    //נשלח את המערך המעודכן כתשובה
    res.status(201).json(users);
});


server.get(`/*`, async (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

//הפעלת השרת
server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

