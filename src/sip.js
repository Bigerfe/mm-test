/**
 * ip 获取
 */
module.exports=function getIPAdress(cb) {
    let interfaces = require('os').networkInterfaces()
    for (let devName in interfaces) {
        let iface = interfaces[devName]
        for (let i = 0; i < iface.length; i++) {
            let alias = iface[i]
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                if(cb){
                    cb(alias.address);
                }
                return alias.address
            }
        }
    }
}
