
const validate = require('../middleware/validator')
const { body } = require('express-validator')

exports.register = validate([
  body('user.phone').notEmpty().withMessage('手机号不能为空'),
  body('user.password').notEmpty().withMessage('密码不能为空'),
  body('user.username').notEmpty().withMessage('名字不能为空'),

])

exports.login = [
  validate([
    body('user.phone').notEmpty().withMessage('手机号不能为空'),
    body('user.password').notEmpty().withMessage('密码不能为空'),
  ]),
]


