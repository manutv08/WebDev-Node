// create a custom eventemitter
const events = require('events')
const eventEmitter = new events.EventEmitter()

function eventone(){
    console.log("event one has fired...");
eventEmitter.emit('data_received')
}


eventEmitter.on('connection', eventone)


eventEmitter.on('data_received',()=>{console.log('data received')})
eventEmitter.emit('connection')