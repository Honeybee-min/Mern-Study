let count = 0;

function increase(){
    count ++;
}

function getCount(){
    return count;
}


// module에 exports 를 통해 count.js 의 두 함수들을 연결해둔다
// [ count 변수는 연결해주지 않았다 하지만 함수 내부적으로 사용하므로 자동으로 연결됨]
module.exports.getCount = getCount;
module.exports.increase = increase;
console.log(module.exports === exports);
// module 없이 exports 도 가능함 하지만 아래처럼 할당해버리면 안되기 때문에 modeul 아래 exports 선언해서 사용하는것이 좋다
// exports = {};
// exports.increase \ increase;
console.log(module);