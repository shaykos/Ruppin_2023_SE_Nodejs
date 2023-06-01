
const { posts } = require('../utils/mockdb');

class PostModel {
  username;
  title;


  static GetPostsForUser(user) {
    return posts.filter(post => post.username === user.username);
  }

}

module.exports = PostModel;