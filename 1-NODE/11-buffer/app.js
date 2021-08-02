// Buffer 

const buf = Buffer.from('hi');
console.log(buf);
console.log(buf.length);
console.log(buf[0]); // 배열로 접근하면 아스키코드로 출력됨
console.log(buf[1]); 
console.log(buf.toString()); 

// create
const buf2 = Buffer.alloc(2); // size 가 두개인 buffer 를 만든다 메모리중에 사용가능한 덩어리 2개를 초기화 시켜준다
const buf3 = Buffer.allocUnsafe(2); // 초기화를 하지않아서 속도는 더 빠르지만 초기화를 안한면 데이터가 있을수 있으므로 초기화를 항상 해주는것이 좋다
buf2[0] = 72;
console.log(buf2.toString());
console.log(buf3);


// concat 
const newBuf = Buffer.concat([buf,buf2,buf3]);
console.log(newBuf.toString());