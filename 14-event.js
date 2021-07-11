const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response',()=>{
  console.log('data received');
})

customEmitter.on('response',(name, age)=>{
  console.log(`other logic on response with name === ${name} and age === ${age}`);
})

customEmitter.emit('response','youcef', 26);