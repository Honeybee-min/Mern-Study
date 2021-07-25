/**
😀 module  : 전역적으로 사용하고 싶으면 (import 개념 ?)  exrports 에 담아준다 그리고 다른 파일에서 사용해보자 [ module-review2.js 로 이동 !]
 */


let count = 0;

function test(){
    count++;
}

function test2(){
    return count;
}


module.exports.test = test;
module.exports.test2 = test2;