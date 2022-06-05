const fs = require('fs')

fs.watch('/home/manu/Node2022/nodemarch/filesystem/hot',(eventtype,filename)=>{
    var content = fs.readFileSync(`${filename}`,'utf-8')
    console.log(content);
    fs.renameSync(`/home/manu/Node2022/nodemarch/filesystem/hot/${filename}`,
                            `/home/manu/Node2022/nodemarch/filesystem/hot/sub/${filename}`)
})