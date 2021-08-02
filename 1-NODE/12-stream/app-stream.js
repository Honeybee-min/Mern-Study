const fs = require('fs');
const data = [];

//stream 한다는것은 결국 데이터를 읽을때 조금씩 stream 해서 처리한다는것이다 
// 쓸때도 stream 가능 [ app-wirte.js 참고 ]

// stream 에서 이벤트가 오면 (데이터가 조금씩 오면 알려줌)
const readStream = fs.createReadStream('./file.txt', {
    //highWaterMark:8,      // 한번에 얼마만큼 읽고 처리할건지 (stream 의 1회 처리 용량 지정) 기본 64kbytes
    encoding:'utf-8',
}).on('data',chunk=>{
    data.push(chunk);               
    //console.log(chunk);
    console.count('data');
}).on('end',()=>{
    console.log(data.join(''));
}).on('error',error=>{
    console.log(error);
});



/** 아래처럼 계속 만들지 말고 위처럼 chanining 가능
readStream.on('data',chunk=>{
    data.push(chunk);               //배열에 받은 데이터를 다 push한다
    //console.log(chunk);
    console.count('data');
});   // data가 오면(일부분 , Buffer 가 올수도 )


readStream.on('end',()=>{
    console.log(data.join(''));
})

readStream.on('error',error=>{
    console.log(error);
}); */