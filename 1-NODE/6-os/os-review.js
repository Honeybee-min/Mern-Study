/**
😀 os  : os 의 자체적인 제어 명령어들 사용가능하다 
 */

const os = require('os');

// EOL : os마다 새로 줄바꿈 하는 문자열이 다른 경우가 있다 해당하는걸 반환해준다
// [ ex) windows : \r\n     mac : \n]
console.log(os.EOL === '\n'); 
console.log(os.EOL === '\r\n');

// 서버가 동작중인 OS 환경 정보를 얻고 싶을때 os module 을 사용한다 !
console.log(os.totalmem());     // os 의 전체 메모리 
console.log(os.type());         
console.log(os.cpus());
console.log(os.userInfo());

