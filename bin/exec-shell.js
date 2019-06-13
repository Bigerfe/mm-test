var shell = require('shelljs');



var exec_fn = function (cmd, fn) {

    shell.exec(cmd, function (code, stdout, stderr) {
        if (code === 0) {
            //fn(stdout)
        } else {
            console.log(stderr)
        }
    });
}

module.exports = exec_fn;
