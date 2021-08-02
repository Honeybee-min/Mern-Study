const os = require('os');

// EOL : os 마다 새로 줄바꿈하는 문자열이 달라지는 경우가 있다 
console.log(os.EOL === '\n'); // mac
console.log(os.EOL === '\r\n'); // window 

// 서버가 동작중인 os 환경의 정보를 얻고 싶을때 os module 을 사용한다
console.log(os.totalmem());
console.log(os.type());
console.log(os.cpus());
console.log(os.userInfo());
console.log(os.hostname());