const fs = require('fs')

fs.unlink('input.txt',(err)=>{
    if(err){
        console.log(err);
    }
    console.log('file deleted successfully');
})