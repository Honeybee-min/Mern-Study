const fs = require('fs').promises;

// 전부 promise 객체이기때문에 비동기적이다 ( 즉, 순서를 보장받지 못한다)
// ==> copyFile 을 맨 마지막에 써도 append 가 되지 않은 파일을 우선 copy 할수도 있으니
// append.then()으로 선언하는것이 좋다

// writing a file
fs.writeFile('./test.txt', 'hello min ! ')
    .catch(console.error);
fs.writeFile('./test.txt', ': )hello min ! ')
    .catch(console.error);
fs.appendFile('./test.txt', 'append content ! ')
    .then(() => {
        fs.copyFile('./test.txt', './copy-test.txt')
        .catch(console.error);
    })

// read a file
fs.readFile('./test.txt', 'utf8')
    .then((data) => console.log(data))
    .catch(console.error);



// folder 
fs.mkdir('sub-folder')
.catch(console.error);
fs.readdir('./')
.then((array)=>console.log(array));