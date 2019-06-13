
function sleep(params) {
    this.queue=[];

}

sleep.prototype.run=function (fn,time) {
    this.queue.push(new Promise(resolve=>{
        setTimeout(() => {
            fn && fn();
            resolve();
        }, timeout);
    }));   
}