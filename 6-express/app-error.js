import express from "express";
import fs from "fs";
import fsAsync from "fs/promises"
const app = express();


app.use(express.json());


// ==========  비동기적인 요청에 대한 에러 처리 ==============
app.get('/file', (req, res, next) => {
    fs.readFile('/file1.txt', (err, data) => {
        if (err) {
            res.sendStatus(404);
        }
    });
});


// ==========  동기적인 요청에 대한 에러 처리 ==============
app.get('/file1', (req, res, next) => {
    /* 이러한 방식으로 하기보다는 동기적인 코드에는 try 문을 사용하는게 좋다 
    const data = fs.readFileSync('/file1.txt');
    res.send(data);
    */
    try {
        const data = fs.readFileSync('/file1.txt');
        res.send(data);
    } catch (error) {
        res.sendStatus(404); // 에러코드 자체만으로 에러내용이 충분하다 
    }
})


// ==========  promise 대한 에러 처리 ==============
app.get('/file2', (req, res, next) => {
    fsAsync
        .readFile('/file2.txt')
        .then((data) => res.send(data))
        .catch(error => res.sendStatus(404)); // 맨밑에 모든 에러에 대한 핸들러를 작성했는데 왜 또 작성하냐 ? 
    //아래 에러핸들러는 비동기적으로 작동하므로 라우터에서 promises 비동기를 사용하면 
    // 에러가 발생했는지 동기적으로 알수가 없어서 일반적 에러처리함수는 사용이 안된다 catch 사용
    // node 5.0 부터는 async 는 에러핸들러로 들어가진다 catch 안해도 ( 하지만 try catch 하는게 좋음)
});

// 하지만 보통은 async 를 붙여서 promise 지만 동기적으로 보이게 
app.get('/file3', async (req, res, next) => {
    try {
        const data = await fsAsync.readFile('/file2.txt');
        res.send(data);

    } catch (error) {
        res.sendStatus(404);
    }

});













// ==========  공통적인 에러 핸들러 ==============
app.use((error, req, res, next) => {
    console.error('error !');
    res.status(500).json({
        "messsage": "Something went wrong"
    });
});

app.listen(8080);