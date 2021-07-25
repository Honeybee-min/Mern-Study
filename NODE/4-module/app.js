// count.js 에서 module.exports. 를 통해 필요한 것만 담아주면 
// require 을 통해 파일 경로로 담아와서 사용한다
const count = require('./count.js');
console.log(count);

count.increase();
console.log(count.getCount());