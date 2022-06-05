const fs = require('fs')

fs.watch('example1.txt',(eventtype,filename)=>{
    console.log('this file ',filename, ' was modified');
    console.log('type of change',eventtype);
})



// setTimeout(()=>{
//     fs.writeFileSync('example1.txt', 'The file is again modified')
// },2000)

setTimeout(()=>{
    fs.rename('example1.txt', 'sample1.txt')
},2000)