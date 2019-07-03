#!/usr/bin/env node

var log = require('../common/chalk-log');
var program = require('commander');
var execShell = require('../src/exec-shell');
var appInfo = require('../package.json');
var localIp = require('../src/sip');
var sgit = require('../src/sgit');

let argvStr = process.argv;

function showIp(){
    localIp((ip)=>console.log('本机 IP:',ip));
}

//入口
const ACTION = {
    'ip': showIp,
    'help': showHelp,
    'gac': sgit.gitAddCommit, 
    'gcp': sgit.gitAddCommitPush,
    'gst':sgit.gitStatus,
    'gdf':sgit.gitDiff,
    'gck':sgit.gitCheckBranch,
    'gba':sgit.gitShowAllBranchs
}

async function execAction() {
    const COMMAND = argvStr[2];
    const COMMANDFN  = ACTION[COMMAND];

    if (COMMANDFN && typeof COMMANDFN ==='function'){
        COMMANDFN(argvStr);
    }else{
        log.red('no matching');
    }
}


execAction();



function showHelp() {
    let str = `\r\n
    mm help :查看帮助 \r\n
    mm ip : 查看本机ip \r\n 
    mm gac : git add .+ git commit -m"***" \r\n
    mm gcp : mm gac+git push \r\n
    mm gst : git stauts \r\n
    mm gdf : git diff \r\n
    mm gck : git checkout [branch] \r\n
    mm gba : git branch -a \r\n`;

    log.green(str);
}