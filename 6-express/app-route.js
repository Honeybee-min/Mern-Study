import express from "express";

const app = express();

app.use(express.json());

// 약간 /post , /post/min , /post/:id 등 같은 경로쪽에 공통된 코드를 계속 작성하는것은 낭비이다
// 그래서 route 를 사용한다 

// [ 근데 아래처럼 전부 나열하면 가독성 , 모듈성 , 유지보수 어려우므로 좀 다르게 한다 route new 파일로 가자]
app
    .route('/posts')
    .get((req, res, next) => {
        res.status(201).send('GET: /posts');

    }).post((req, res, next) => {
        res.status(201).send('POST: /posts');

    });

app
    .route('/posts/:id')
    .put((req, res, next) => {
        res.status(201).send('PUT: /posts/:id');
    })
    .delete((req, res, next) => {
        res.status(201).send('DELETE: /posts/:id');
    });


/* 아래처럼 계속 반복하는것이 낭비이므로 위처럼 라우터를 사용한다
app.get('/posts',(req,res,next)=>{
    res.status(201).send('GET: /posts');
});

app.post('/posts',(req,res,next)=>{
    res.status(201).send('POST: /posts');
});

app.put('/posts/:id',(req,res,next)=>{
    res.status(201).send('PUT: /posts/:id');
});

app.delete('/posts/:id',(req,res,next)=>{
    res.status(201).send('DELETE: /posts/:id');
});

 */



app.listen(8080);