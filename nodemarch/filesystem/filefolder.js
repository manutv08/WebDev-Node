const fs = require('fs')

// fs.mkdir('temp',(err)=>{
//     console.log('directory created');
// })

// to remove

// fs.rmdir('temp',()=>{
//     console.log('directory removed');
// })

// to read the contents of a directory
fs.readdir('/home/manu/Node2022',(err,files)=>{
    if(err){
        console.log(err);
    }
    files.forEach((file)=>{console.log(file)})
})