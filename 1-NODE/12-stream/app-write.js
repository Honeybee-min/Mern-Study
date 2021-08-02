const fs = require('fs');

const writeStream = fs.createWriteStream('./file3.txt');
writeStream.on('finish',()=>{
    console.log('end!');
});


// 실행하면 hello world 의 file3.txt 는 만들어지지만 finish 조건이 도달을 안한다 
// [stream 으로 쓰기때문에 조금씩조금씩 분할해서 써서 끝이라는것을 선언을 해줘야 끝난줄 안다]
writeStream.write('hello!');
writeStream.write('world');
writeStream.end();
