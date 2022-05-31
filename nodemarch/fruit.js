const fs = require('fs')
let fruits={"name":"Apple", 
"Family":"fruits",
qty:20}
// let fruit_str=JSON.stringify(fruit)
// fs.writeFileSync('jsonfile.json',bookJson)

const data = fs.readFileSync("fruitList_may.json",'utf-8')
console.log((data));


const parsedData = JSON.parse(data)
parsedData.name="Mango"
parsedData.qty = 25

let fruit_str=JSON.stringify(parsedData)
fs.writeFileSync('fruitList.json',fruit_str)

// const fruit =JSON.parse(fs.readFileSync('fruitList_may.json'))
// console.log();