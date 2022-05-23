const fs = require("fs")

//App Object

var jokes={}

jokes.allJokes=function(){
    var fileContent=fs.readFileSync(__dirname+"/jokes.txt","utf-8")
    var arrayOfJokes=fileContent.split("\n")
    return arrayOfJokes
}
module.exports=jokes;