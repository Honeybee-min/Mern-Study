const EventEmitter = require('events');
const { emit } = require('process');



// 특정한 callback 이라는 함수를 실행 전후에 이벤트를 만들어주는 함수 
/**
function log(callback){
    emitter.emit('log','start ! ');
    callback();
    emitter.emit('log','end ! ');
}
 */

class Logger extends EventEmitter{
    log(callback){
        emit('log','start ! ');
        callback();
        emit('log','end! ');
    }
}
module.exports.Logger = Logger;
