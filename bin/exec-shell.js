var shell = require('shelljs');



async function exec_fn(cmd, fn) {
    return new Promise(resolve=>{
        shell.exec(cmd, function (code, stdout, stderr) {
            console.log('^-^ log');
            fn && fn();
            resolve(code);
            // if (code === 0) {
            //     console.log('reuslt ok');
            //     //fn&&fn('shell result ok'+stdout)
            // } else {
            //     console.log('shell result error'+stderr)
            // }
        });

    });
   
}

module.exports = exec_fn;
