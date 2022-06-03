var fs = require('fs')
var zlib = require('zlib')

// FILE COMPRESSION
// fs.createReadStream('input.txt')
// .pipe(zlib.createGzip())
// .pipe(fs.createWriteStream('input.txt.gz'));

// console.log("File Compressed");

// FILE COMPRESSION
fs.createReadStream('input.txt.gz')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('input.txt'));

console.log("File Decompressed");
