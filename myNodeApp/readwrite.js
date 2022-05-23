var fs = require("fs")
console.log(fs);
// require("underscore")
fs.writeFileSync("abc.txt","welcome to node js programming......")
console.log("Program ended");

console.log(fs.readFileSync("abc.txt").toString());

