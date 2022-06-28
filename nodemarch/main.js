const {Worker} = require('worker_threads')

let number = 15

const worker = new Worker('./myworker.js', {workerData:{num:number}})

worker.once('message', (result)=>{
    console.log('result : ',result);
})
worker.on('error',()=>{

})

worker.on('exit',()=>{
    console.log('workers finished')

})