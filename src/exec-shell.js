var shell = require('shelljs');
var log = require('../common/chalk-log');



async function exec_fn(cmd, fn) {
    return new Promise(resolve => {
        shell.exec(cmd, {
            slient:true
        }, function (code, stdout, stderr) {
            log.green('s*********************************');
            fn && fn();
            resolve(code);
            log.green(stdout);
            log.green('e*********************************');
        });

        // var res = shell.exec(cmd, {
        //     silent: true,
        //     async:true
        // });
        // res.stdout.on('data', function (data) {
        //     log.green('s*********************************');
        //     log.green(data);
        //     resolve();
        //     log.green('e*********************************');
        // });
        // res.stderr.on('data', function (data) {
        //     /* ... do something with data ... */
        //     log.red('s*********************************');
        //     log.red(data);
        //     resolve();
        //     log.red('e*********************************');
        // });

    });

}

module.exports = exec_fn;