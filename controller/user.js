const md5 = require('../util/md5')
// const jwt = require('../util/jwt')
const dateUntil = require('../util/date')
const config = require('../config/config')
const jwt = require('jsonwebtoken')
const userModel = require('../models/user')

exports.login = async (req, res, next) => {
  try {
    const targetData = req.body.user;
    const user = await userModel.all().where({ phone: targetData.phone })
    console.log(user);
    if (user.length) {
      if (user[0].password == md5(targetData.password)) {
        const token = jwt.sign({ username: user[0].username }, config.jwtSecret, { expiresIn: '24h' })
        res.send({ data: { msg: 'success', token: token } })
      } else {
        res.status(400).json({ data: { msg: "密码错误" } })
      }
    }
  } catch (error) {
    next(error)
  }
}

exports.register = async (req, res, next) => {
  try {
    const targetData = req.body.user;
    const user = await userModel.all().where({ phone: targetData.phone })
    if (user.length) {
      res.status(400).json({ msg: '用户已存在' }).end()
    } else {
      const date = dateUntil.formatTime(new Date())
      targetData.create_time = date;
      targetData.password = md5(targetData.password)
      // console.log(targetData);
      userModel.insert(targetData).then(() => {
        res.send({ data: { msg: 'success' } })
      }).catch(e => {
        res.status(500).json({ data: { msg: e } })
      })
    }
  } catch (error) {
    next(error)
  }
}


exports.demo = async (req, res, next) => {
  try {
    console.log(req.userInfo);
    res.status(200).json({ userInfo: req.userInfo })

  } catch (error) {
    next(error)
  }

}