import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));

// [ Route 없이 내가 처음 해본 구현 ]

const tweets = {
    "one": {
        id: 1,
        text: '백엔드는 어려워 ~',
        name: 'Ellie',
        username: 'dreamcoder',
    },
    "two": {
        id: 2,
        text: '열심히 ! ',
        name: 'Ellie',
        username: 'dreamcoder',
    },
    "three": {
        id: 3,
        text: '항상 화이팅',
        name: 'Bob',
        username: 'bob',
    },
};



// 모든 트윗 로드 핸들러 
app.get('/tweets', (req, res, next) => {
    console.log("Start /tweets")
    const allTweet = Object.entries(tweets);
    res.send(allTweet);
    //res.send("Main tweets")
});

// 특정 아이디 트윗 로드 핸들러
app.get('/tweets/:id', (req, res, next) => {
    console.log(`Start /tweets/${req.params.id}`);
    const id = req.params.id;
    tweets[id] ? res.status(200).send(tweets[id]) : res.sendStatus(204);

})
/**
// get target username load handler
app.get('/tweets?username=username',(req,res,next)=>{
    console.log(`Start /tweets?username=${req.query.username}`);
}) 
 */

// 새로운 트윗 작성 핸들러 
app.post('/tweets', (req, res, next) => {
    const newTweet = {
        "id": new Date(),
        ...req.body
    };
    tweets[newTweet.id] = newTweet;
    res.status(201).send(tweets);

})

// 특정 아이디의 트윗 수정 핸들러 
app.put('/tweets/:id', (req, res, next) => {
    const id = req.params.id;
    const content = req.body.text;
    tweets[id] ? tweets[id].text = content : res.sendStatus(204);
    res.status(201).send(tweets);
})

// 특정 아이디의 트윗 삭제 핸들러 
app.delete('/tweets/:id',(req,res,next)=>{
    const id = req.params.id;
    tweets[id] ? delete tweets[id] : res.sendStatus(204);
    res.status(201).send(tweets);
})


// 기타 페이지 접속시 핸들러 
app.use((req, res, next) => {
    res.status(404).send("Not Found ! XD");
})

// 통합 에러 핸들러 
app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).send("sorry");
})

app.listen(8080);