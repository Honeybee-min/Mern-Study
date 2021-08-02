/**
😀 Global : 전역 객체로서 node 환경내에 모든 파일에서 접근이 가능하다 
[ global 은 생략하고 호출 가능하다 ! ]
 */

console.log(global);

global.hello = () => {
    global.console.log('hello');
}

global.hello();
hello();

