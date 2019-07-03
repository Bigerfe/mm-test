//入口文件

let getIp = require('./src/sip');
let hello=require('./src/hello');

exports.sayHello = hello;
exports.getIp = getIp;