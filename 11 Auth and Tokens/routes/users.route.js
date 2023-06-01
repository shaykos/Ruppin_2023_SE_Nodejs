const UserModel = require('../models/user.model');
const {RefreshToken} = require('../utils/auth');

const UserRoute = require('express').Router();

UserRoute.get('/', async (req, res) => {
  let users = UserModel.GetAllUsers();
  res.status(200).json(users);
});

UserRoute.post('/register', async (req, res) => {
  try {
    let { username, password } = req.body;
    if (await UserModel.RegisterUser(username, password))
      res.status(201).json({ msg: "Register Completed" });
    else {
      res.status(500).json({ msg: "Something went wrong" });
    }
  }
  catch (error) {
    res.status(500).json({ error });
  }
});

UserRoute.post('/login', async (req, res) => {
  try {
    let { username, password } = req.body;
    if (await UserModel.LoginUser(username, password)) {
      let { token, refreshToken } = UserModel.GenerateToken({ username });
      res.status(200).json({ msg: "Success", token, refreshToken });
    }
    else
      res.status(400).json({ msg: "user not exists" });
  } catch (error) {
    res.status(500).json({ error });
  }

});

// UserRoute.post('/refresh', RefreshToken, async (req, res) => {
//   try {
//     res.send('');
//   } catch (error) {
//     res.status(500).json({ error });
//   }

// });

module.exports = UserRoute;