const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { users, tokens } = require('../utils/mockdb');

class UserModel {

  username;
  password;

  static GetAllUsers() {
    return users;
  }

  static async RegisterUser(username, password) {
    try {
      let hashPassword = await bcrypt.hash(password, 10);
      users.push({ username, password: hashPassword });
      return true;
    }
    catch (error) {
      return false;
    }
  }

  static async LoginUser(username, password) {
    let user = users.find(u => u.username === username);
    if (!user) return false;
    return await bcrypt.compare(password, user.password);
  }

  static GenerateToken(user) {
    let token = jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: '10s' });
    let refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN);
    tokens.push(refreshToken);
    return { token, refreshToken };
  }

}

module.exports = UserModel;