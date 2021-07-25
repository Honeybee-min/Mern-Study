// log level ================================================================
console.log("logging .. !")
console.clear();
console.log('log');     // 개발
console.info('info');   // 정보
console.warn('warn');   // 경보
console.error('error'); // 에러

// assert ================================================================
// [ 참이 아닌 경우에만 출력이 된다]; 
console.assert(2===3,'not same! ');
console.assert(2===2,'same !');


console.clear();
// print object ================================================================
const student = {name:'min',age:20,company:{name:'academy'}};
console.log(student);
console.table(student);

console.clear();
//measuring time ================================================================
console.time('for loop');
for(let i=0;i<10;i++){
    i++;
}
console.timeEnd('for loop');

console.clear();
// counting ================================================================
function a(){
    console.count('a function');
}
a();
a();
console.countReset('a function');
a();

console.clear();
function f1(){
    f2();
}

function f2(){
    f3();
}

function f3(){
    console.log('f3');
    console.trace();
}
f1();
