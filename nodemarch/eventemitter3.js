const events = require('events')
const eventEmitter = new events.EventEmitter()

// eventEmitter.once('eventOnce',()=>{console.log("only once invoked");})

// eventEmitter.emit('eventOnce')

// eventEmitter.emit('eventOnce')

eventEmitter.on('status', (code,msg)=>console.log(`Got ${code} and ${msg}`))

eventEmitter.emit('status',200,"ok")