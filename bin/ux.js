#!/usr/bin/env node

var program = require('commander');
var execShell = require('./exec-shell');
var appInfo = require('../package.json');
var localIp = require('../src/ip');

let argvStr = process.argv;


//入口
const ACTION = {
    'ip': '-ip',
    'help': '-help',
    'gitcommit': 'gc', //执行 add 和 commit
    'gitcommitpush': 'gcp' //执行 add 和 commit

}

execAction();
async function execAction() {
    if (argvStr.indexOf(ACTION.ip) > -1) {
        console.log('本机ip---->', localIp());
    } else if (argvStr.indexOf(ACTION.gitcommit) > -1) {
        var des = argvStr[3];
        if (!des && argvStr.length===3) {
            console.log('请输入commit说明');
            return;
        }
        var alldes = argvStr.slice(3).join(' ');
        await execShell('git add .');
        await execShell(`git commit -m"${alldes}"`);

    } else if (argvStr.indexOf(ACTION.gitcommitpush) > -1) {
        var des = argvStr[3];
        if (!des && argvStr.length === 3) {
            console.log('请输入commit说明');
            return;
        }
        var alldes = argvStr.slice(3).join(' ');
        await execShell('git add .');
        await execShell(`git commit -m"${alldes}"`);
        await execShell(`git push`);

    } 
    else if (argvStr.indexOf(ACTION.help) > -1) {
        showHelp();
    }
}

// program
//     .version(appInfo.version)
// program
//     .command('ux <shell>')

//     // .alias('s')

//     // .description('Enter the "shell" you want to convert and include it in \" \"  ')

//     // .option("-p, --path <path>", "Enter you html path , default ./share_you_shell.html")

//     .action(function (options) {
//         console.log('-------', options);

//     }).on('--help', function () {
//         console.log('  Examples:');
//     }).on('--ip',function (params) {
//         console.log('params',params);
//     });


//program.parse(process.argv);
function showHelp() {
    let str = 'ux -ip:查看本机ip \r\n ux -help:查看帮助';
    console.log(str);
}