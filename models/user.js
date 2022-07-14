const Base = require('./base.js');

class User extends Base {
  constructor(props = 'userInfo') {
    super(props);
  }
}

module.exports = new User()