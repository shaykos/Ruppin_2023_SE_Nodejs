//Router ייבוא הספריה + יצירת ה 
const UserRouter = require('express').Router();

//יצירת הנתיבים
UserRouter.get('/', async (req, res) => {
  const users = [
    { id: 1, name: 'kuku' },
    { id: 2, name: 'lulu' },
    { id: 3, name: 'momo' }
  ]
  res.status(200).json(users);
});

UserRouter.get('/:name', async (req, res) => {
  const { name } = req.params;
  res.status(200).json({ id: '2', name });
});

UserRouter.post('/add', async (req, res) => {
  try {
    const { id, name, date } = req.body;
    res.status(201).json({ id, name, date });
  } catch (error) {
    res.status(500).json({ error });
  }
})

module.exports = UserRouter;