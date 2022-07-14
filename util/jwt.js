const jwt = require('jsonwebtoken')

// const { promisify } = require('util')
// // 生成
// // const token =  jwt.sign({
// //   foo:'bar'
// // },'dsa')
// const dd = "ddd"

// jwt.sign({
//   foo: dd
// }, 'dsa', (err, token) => {
//   if (err) {
//     return console.log(err);
//   }
//   console.log(token);
// })

// // exports.sign = promisify(jwt.sign)
// // exports.verify = promisify(jwt.verify)
// // exports.decode = promisify(jwt.decode)

// jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTcyNzUyMDB9.n0_SHZcT0W5bLWO5ehhI-edYBO15AsyCICi9Tw1iHLc', '64926A55-B1DA-E54D-909A-A600D0983355',
//  (err, ret) => {
//   if (err) {
//     return console.log("token 认证失败");
//   }
// console.log(ret);

// })
