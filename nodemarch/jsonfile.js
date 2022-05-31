const fs = require('fs')
const book={
    name:"The jungle book",
    author:"Rudyard Kipling"
}
const bookJson = JSON.stringify(book)
// console.log(bookJson);
fs.writeFileSync('jsonfile.json',bookJson)

const data = fs.readFileSync('jsonfile.json')
// const data = fs.readFileSync('jsonfile.json','utf-8')
// console.log(data);
console.log(data.toString());

const parsedData = JSON.parse(data)
console.log(parsedData.author);
// const parsedData = JSON.parse(bookJson)
// console.log(parsedData.author);

