import express from "express";
import helmet from "helmet";
import { runInNewContext } from "vm";

const router = express.Router();
const tweets = {
    "first": {
        id: 1,
        text: '백엔드는 어려워 ~',
        name: 'Ellie',
        username: 'dreamcoder',
    },
    "second": {
        id: 2,
        text: '열심히 ! ',
        name: 'Ellie',
        username: 'dreamcoder',
    },
    "third": {
        id: 3,
        text: '항상 화이팅',
        name: 'Bob',
        username: 'bob',
    },
};



// 모든 트윗 로드 헨들러 
router.get('/',(req,res,next)=>{
    tweets ? res.status(200).send(tweets) : res.sendStatus(204);
})

// 특정 아이디 트윗 로드 핸들러 
router.get('/:id',(req,res,next)=>{
    const id = req.params.id;
    tweets[id] ? res.status(200).send(tweets[id]) : res.sendStatus(204);
})

// 새로운 트윗 생성 핸들러 
router.post('/',(req,res,next)=>{
    const content = req.body;
    content[id] = new Date();
    res.send(content);
})

// 특정 닉네임 트윗 로드 핸들러 
// 


// 특정 아이디 트윗 수정 핸들러 
router.put('/:id',(req,res,next)=>{
    const id = req.params.id;
    const content = req.body.text;
    tweets[id] ? tweets[id].text = content : res.sendStatus(204); 
    res.send(tweets);
})

// 특정 아이디 트윗 삭제 핸들러 
router.put('/:id',(req,res,next)=>{
    const id = req.params.id;
    tweets[id] ? delete tweets[id] : res.sendStatus(204);
    res.send(tweets);
})




// 에러 핸들러 ===========================================
router.use((req,res,next)=>{
    res.status(404).send("Not Found ! XD");
})

router.use((error,req,res,next)=>{
    console.error(error);
    res.status(500).send("sorry");
})



export default router;

