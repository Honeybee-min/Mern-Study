const EventEmitter = require('events');
const emitter = new EventEmitter();
const callback1 = (args)=>{
    console.log('first : ' ,args);
};

emitter.on('min',callback1);

emitter.on('min',(args)=>{
    console.log('second : ',args);
});

emitter.emit('min',{message:1});
emitter.removeListener('min',callback1);
emitter.emit('min',{message:2});


