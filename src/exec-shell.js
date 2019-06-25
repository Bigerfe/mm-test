var shell = require('shelljs');
var log = require('../common/chalk-log');



async function exec_fn(cmd, fn) {
    return new Promise(resolve=>{
        shell.exec(cmd, function (code, stdout, stderr) {
            log.red('s*********************************');
            fn && fn();
            resolve(code);
            log.red('e*********************************');
        });

    });
   
}

module.exports = exec_fn;
