let num = 1;
// setInterval : 전달한 시간(ms) 마다 함수 파라미터를 실행한다
const interval = setInterval(()=>{
    console.log(num++);
},1000);

setTimeout(()=>{
    console.log('timeOut! ');
    clearInterval(interval);
},6000);