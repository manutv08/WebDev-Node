const fs = require('fs')
// fs.open('input.txt','r+',(err,fd)=>{
//     if(err) throw err
//     console.log('file opened successfully');
// })

console.log('file writing process started');
fs.writeFile('input.txt',"This is a new text",(err,data)=>{
    if(err) throw err
    console.log('file write completed');
})

console.log('file reading process started');
fs.readFile('input.txt','utf8',(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log('file process finished');
})