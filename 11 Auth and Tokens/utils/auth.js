const jwt = require('jsonwebtoken');

function AuthUser(req, res, next) {
  let authHeader = req.headers['authorization'];
  let token = authHeader?.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.TOKEN_SECRET, (err, data) => {
    if (err) return res.sendStatus(403);

    req.user = data;
    next();
  });
}

function RefreshToken(req, res, next) {
  let { refreshToken } = req.body;
  if(!refreshToken) return res.sendStatus(401);

  
  let authHeader = req.headers['authorization'];
  let token = authHeader?.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.TOKEN_SECRET, (err, data) => {
    if (err) return res.sendStatus(403);

    req.user = data;
    next();
  });
}

module.exports = { AuthUser, RefreshToken }