
const jwt = require('jsonwebtoken')
const config = require('../config/config')
const userModel = require('../models/user')

module.exports = async (req, res, next) => {
  let token = req.headers['authorization']
  token = token ? token.split('token ')[1] : null
  if (!token) {
    return res.status(401).json({ errors: "登录过期" }).end()
  }
  try {
    const isToken = jwt.verify(token, config.jwtSecret)
    userModel.knex().select('user_id', "username", 'phone', 'birthday').where({ username: isToken.username }).then(data => {
      req.userInfo = data[0];
      next()
    }).catch(err => {
      return res.status(500).json({ errors: err }).end()
    });
  } catch (error) {
    return res.status(401).json({ errors: "登录过期" }).end()
  }
}