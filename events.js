
const eventBox = require('events')

console.log(eventBox);

const customEmitter = new eventBox()

customEmitter.on('response', ( name, id)=>{
    console.log(`data recieved by user ${name} with id: ${id}`);
})
customEmitter.on('response', ()=>{
    console.log(`some other logic code`);
})

customEmitter.emit('response', 'rasgan', 28)
