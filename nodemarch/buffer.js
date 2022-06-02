// 01-June-2022
// const buffer1 = Buffer.alloc(100)
// const buffer2 = Buffer.from('apple')

// console.log(buffer2.length);
// buffer1.write('How are you?')
// console.log(buffer1.toString());


// const buffer1 = Buffer.from('a')
// const buffer2 = Buffer.from('j')
// const buffer3 = Buffer.from('e')

// const arr = [buffer1,buffer2,buffer3]

// const buff = Buffer.concat(arr)

// console.log((buff));

// 02-June-2022
const buffer1 = Buffer.from('Expertz')
const buffer2 = Buffer.from('hello')
console.log(buffer1);
console.log(buffer2);

// "A".charCodeAt(0)
// console.log(buffer2.toJSON());

const buffer3 = Buffer.concat([buffer1,buffer2])

console.log(buffer3.toString());

buffer2.copy(buffer1)
console.log(buffer1.toString());