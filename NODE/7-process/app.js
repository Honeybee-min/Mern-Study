// node 가 동작하고 있는 process 의 정보를 알수 있는 module
const process = require('process');

console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage());

// 내가 등록한 함수가 모두 실행된 후 내가 지정한 함수를 넣어달라 
setTimeout(() => {
    console.log('setTimeout');
}, 0)
process.nextTick(() => {
    console.log('netx Tick');
})
for(let i =0;i<100;i++){
    console.log('for loop!');
}