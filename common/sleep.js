
//如何写一个sleep 函数
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