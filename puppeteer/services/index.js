const favlist = require('./favlist');
const user = require('./user');

module.exports = {
  ...favlist,
  ...user,
};
