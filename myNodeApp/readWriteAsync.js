var fs=require("fs")
fs.writeFile("data.txt","First Node program",(err)=>{
    if(err){
        console.log("Error occured");
    }
    console.log("write operation successful.......");
})
console.log("END.........");
fs.readFile("data.txt",(err,data)=>{
    if(err){
        console.log("Error");
    }
    console.log(data.toString());
})