var shell = require('shelljs');



var exec_fn = function (cmd, fn) {
    setTimeout(() => {
        shell.exec(cmd, function (code, stdout, stderr) {
            // if (code === 0) {
            //     console.log('reuslt ok');
            //     //fn&&fn('shell result ok'+stdout)
            // } else {
            //     console.log('shell result error'+stderr)
            // }
        });
    }, 2000);

}

module.exports = exec_fn;
