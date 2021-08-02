// 여기서 require 을 통해서 사용하고자 하는 파일의 export 메서드들을 받는다 
const count = require('./module-reivew.js');

// test function 이 실행되고 굳이 내부에 count 변수까지 안담아줬었는데 자동으로 함수에 포함된 변수가 이어서 잘 사용되었다 
count.test();
console.log(count.test2());

