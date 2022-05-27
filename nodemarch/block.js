const fs = require('fs')
console.log('program is started');
const data = fs.readFile('message.txt',function(err,data){
    if(err){
        console.log(err);
    }
    else{
        console.log(data.toString());
    }
})
// console.log(data.toString());
console.log('program is finished');