/**
๐ module  : ์ ์ญ์ ์ผ๋ก ์ฌ์ฉํ๊ณ  ์ถ์ผ๋ฉด (import ๊ฐ๋ ?)  exrports ์ ๋ด์์ค๋ค ๊ทธ๋ฆฌ๊ณ  ๋ค๋ฅธ ํ์ผ์์ ์ฌ์ฉํด๋ณด์ [ module-review2.js ๋ก ์ด๋ !]
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