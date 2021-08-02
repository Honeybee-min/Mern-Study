const fs = require('fs');

// 모든 api 는 3가지 형태로 제공된다
// rename(....,callback(error,data)) -> 필요한 일을 다 하고 callback function 호출
// try{renameSync(....) } catch(e) -> blocking ( 따로 callback 전달 안함), 끝날때 까지 다음줄 진행 안함
// promise.rename().then().catch() -> rename을 promise type 으로 사용함


// rename 은 에러가 발생하면 node가 죽는다(=뒤에 코드들이 아무것도 실행안됨)
// 그래서 항상 try 로 싸줘야 한다 , 또 동기적으로 되므로 가급적 사용 안함
/**
 try{
     fs.renameSync('./test.txt','./test-new.txt');
 }catch(error){
     console.error(error);
 }
 console.log('hello');
 */

 /** 이번에는 비동기적으로 hi 먼저 출력되고 rename 되었다 error 는 없어서 null 을 던짐
 fs.rename('./test-new.txt','./test.txt',(error)=>{console.log(error)});
 console.log('hi');
*/



 // 하지만 rename 처럼 callback 을 던지는것이 더럽고 별로다 하면 promise 사용
 fs.promises.rename('./test-new.txt','./test.txt')
 .then(()=>console.log('good'))
 .catch(()=>console.error(error));