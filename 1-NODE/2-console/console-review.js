/**
😀 console : 단순히 log 출력뿐만 아니라 error, assert, info, warn 등 여러 기능이 있다
 */

// 1 . log level ! 
console.log('logging ! ');
console.clear();
console.log('log ! '); // log : 개발
console.info('info !'); // info : 정보
console.warn('warninig !'); // warning : 경보 
console.error('error !'); // error : 에러 

// assert [ False 인 경우 실행된다 !]
console.assert(2 === 3, 'not same !'); // 실행 !
console.assert(2 === 2, 'same !');

// print Object [ 출력할 수 있는 여러 방법들 ]
const student = {
    name: 'min',
    age: 21,
    hobby : 'game',
    company : {naem : 'Dream!'}
};
console.log(student);
console.table(student);

// .time 
console.time('for loop');
for(let i=0;i<100;i++){
    i++;
}
console.timeEnd('for loop');

