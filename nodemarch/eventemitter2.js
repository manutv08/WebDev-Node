const events = require('events')
const eventEmitter = new events.EventEmitter()

const listener1 = function(){
    console.log("listener 1 is invoked");
}

const listener2 = function(){
    console.log("listener 2 is invoked");
}
eventEmitter.on('connection',listener1)
eventEmitter.addListener('connection',listener2)

eventEmitter.emit('connection')

let eventlisteners = events.EventEmitter.listenerCount(eventEmitter,'connection')
console.log(eventlisteners + ' Listeners are listening');

eventEmitter.removeListener('connection',listener1)
console.log('listener1 removed');

eventEmitter.emit('connection')

eventlisteners = eventEmitter.listenerCount('connection')
console.log(eventlisteners + ' Listeners are listening');