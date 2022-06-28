// 1, 1, 2, 3, 5, 8, 13.........
const {paretPort, workerData, parentPort} = require('worker_threads')



const fibonacci = (num)=>{
    if(num == 0){
        return 0
    }
    if(num == 1){ return 1}
    fibonacciresult =  fibonacci(num-1) + fibonacci(num -2)

    process.stdout.write('.')
    return fibonacciresult
}

let result = fibonacci(workerData.num)

parentPort.postMessage(result)