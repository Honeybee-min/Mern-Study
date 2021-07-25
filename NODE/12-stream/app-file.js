const fs = require('fs');

// 😥

const beforeMem = process.memoryUsage().rss;        // 현재 사용중인 메모리를 읽는다 
fs.readFile('./file.txt',(error,data)=>{                // 저장해둔 파일을 읽는다 
    fs.writeFile('./file2.txt',data,()=>{});        // 읽은 파일로 작성한다 [ 모든 파일을 다 읽은 후 작성함] => 모든것을 다 읽은 후 하는것은 비효율적
    //calculate
    const afterMem = process.memoryUsage().rss;
    const diff = afterMem-beforeMem;
    const consumed = diff / 1024 / 1024 ;
    console.log(diff);
    console.log(`Memory : ${consumed}`);
});