var chalk = require('chalk');
module.exports = {
    green:(msg)=>{
        console.log(chalk.green(msg));
    },
    red: (msg) => {
        console.log(chalk.red(msg));
    },
}