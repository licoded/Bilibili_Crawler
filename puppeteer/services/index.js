const favlist = require('./favlist');
const follow = require('./follow');
const user = require('./user');

module.exports = {
  ...favlist,
  ...follow,
  ...user,
};
