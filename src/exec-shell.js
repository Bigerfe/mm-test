var shell = require('shelljs');
var log = require('../common/chalk-log');



async function exec_fn(cmd, fn) {
    return new Promise(resolve=>{
        shell.exec(cmd, {
            slient:true
        }, function (code, stdout, stderr) {
            log.green('s*********************************');
            fn && fn();
            resolve(code);
            log.green(stdout);
            log.green('e*********************************');
        });

    });
   
}

module.exports = exec_fn;
