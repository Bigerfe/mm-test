var shell = require('shelljs');



var exec_fn = function (cmd, fn) {
    shell.exec(cmd, function (code, stdout, stderr) {
        if (code === 0) {
            console.log('reuslt ok');
            //fn&&fn('shell result ok'+stdout)
        } else {
            console.log('shell result error'+stderr)
        }
    });
}

module.exports = exec_fn;
