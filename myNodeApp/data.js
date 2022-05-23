var fs = require("fs")
let person = {name:"ann",age:20}
let person_str=JSON.stringify(person)
fs.writeFileSync("person.json",person_str)

let fruit={name:"Orange", price:100,qty:"1kg"}
let fruit_str=JSON.stringify(fruit)
fs.writeFile("fruitList.json",fruit_str,(err)=>{
    if(err){
        console.log("Error occured");
    }
    console.log("write operation successful.......");
})
fs.readFile("fruitList.json",(err,data)=>{
    // console.log(err);
    // if(err){
    //     console.log("Error");
    // }
    if(data){
    console.log(data.toString());
    let fruit=JSON.parse(data.toString())
    fruit["name"]="Mango"
    fruit["qty"]="2kg"
    fs.writeFile("fruitList.json",JSON.stringify(fruit),(err)=>{
        if(!err){
            console.log("done")

        }
    })
    }
})

console.log(__dirname);