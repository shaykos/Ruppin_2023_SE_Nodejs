const PostModel = require('../models/post.model');
const { AuthUser } = require('../utils/auth');
const PostRoute = require('express').Router();

PostRoute.get('/', AuthUser, async (req, res) => {
  let posts = PostModel.GetPostsForUser(req.user);
  res.status(200).json(posts);
});


module.exports = PostRoute;