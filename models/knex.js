const config = require('../config/config');
// 把配置文件中的信息，设置在初始化配置中
module.exports = require('knex')({
  client: 'mysql',
  connection: {
    host: config.mysql.host,
    user: config.mysql.user,
    port: config.mysql.port,
    password: config.mysql.password,
    database: config.mysql.database,
  }
})