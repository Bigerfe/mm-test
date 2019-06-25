/**
 * git 命令支持
 */
var execShell = require('./exec-shell');

 module.exports = {
     gitAddCommit:async (argvStr)=>{
         var des = argvStr[3];
         if (!des && argvStr.length === 3) {
             console.log('请输入commit说明');
             return;
         }
         var alldes = argvStr.slice(3).join(' ');
         await execShell('git add .');
         await execShell(`git commit -m"${alldes}"`);
     },
     gitAddCommitPush:async (argvStr)=>{
         var des = argvStr[3];
         if (!des && argvStr.length === 3) {
             console.log('请输入commit说明');
             return;
         }
         var alldes = argvStr.slice(3).join(' ');
         await execShell('git add .');
         await execShell(`git commit -m"${alldes}"`);
         await execShell(`git push`);
     },
     gitStatus: async () => {
         await execShell('git status');

     },
     gitDiff: async () => {
         await execShell('git diff');
     },
     gitCheckBranch: async (argvStr) => {
         var branch = argvStr[3];
         await execShell(`git checkout ${branch}`);
     },
     gitShowAllBranchs: async (argvStr) => {
         var branch = argvStr[3];
         await execShell(`git branch -a`);
     }
 }