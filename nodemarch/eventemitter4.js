const events = require('events');
const { EventEmitter } = require('stream');
const util = require('util')

const person = function(name){
    console.log(name);
}

util.inherits(person, events.EventEmitter)

const Ajesh = new person("Ajesh")
const Rani = new person("Rani")
const sanju = new person("sanju")

const people = [Ajesh, Rani, sanju]

// people.forEach(person =>{
//     person.on('speak',(msg)=>{
//         console.log(person.name + ' ' + msg);
//     })
// })

Ajesh.on('speak',(msg)=>{
    console.log('hellooo');
})

Ajesh.emit('speak','hellooo')