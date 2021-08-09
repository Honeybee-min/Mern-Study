import express from "express";
import {
    readFileSync
} from "fs";
import helmet from "helmet";

let tweets = [{
        id: "1",
        text: "화이팅 !",
        createdAt: Date.now().toString(),
        name: "BoB",
        username: "bob",
        url: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png"
    },
    {
        id: "2",
        text: "안녕 !",
        createdAt: Date.now().toString(),
        name: "Min",
        username: "min",
        url: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png"
    }

]

const router = express.Router();

// GET /tweets
// GET /tweets?username=username
router.get('/', (req, res, next) => {
    const username = req.query.username;
    const data = username ? tweets.filter(t => t.username === username) : tweets;
    res.status(200).send(data);
})

// GEt /tweets/:id
router.get('/:id', (req, res, next) => {
    // 내가 생각한 방식 
    /**
    const id = req.params.id;
    const data = id ? tweets.find(t => t.id === id) : res.sendStatus(204);
    res.status(200).send(data);
     */
    // 엘리 방식 
    const id = req.params.id;
    const data = tweets.find(t => t.id === id);
    if (data) {
        res.status(200).send(data)
    } else {
        res.status(204).json({
            message: `not found id : ${id}`
        });
    }

})

// POST /tweets
router.post('/', (req, res, next) => {
    // 내가 생각한 방식
    /** 
    const content = req.body;
    //console.log(Object.keys(content).length);
    if (Object.keys(content).length > 0) {
        content.id = new Date().toString();
        tweets.push(content);
        res.status(200).send(tweets);
    } else {
        res.sendStatus(204);
    }
 */
    // 엘리 방식 
    const {
        text,
        username,
        name
    } = req.body;
    const tweet = {
        id: Date.now().toString(),
        text,
        createdAt: new Date().toString(),
        name,
        username,
        url: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png"
    }
    console.log(tweet);
    tweets = [tweet, ...tweets];
    res.status(201).send(tweets);

})

// PUT /tweets/:id
router.put('/:id', (req, res, next) => {
    // 내가 한 방식 
    /**
    const id = req.params.id;
    const content = req.body.text;
    const data = tweets.find(t => t.id === id);
    data ? data.text = content : res.sendStatus(204);
    res.send(tweets);
    */
   // 
    const id = req.params.id;
    const {text}= req.body;
    const tweet = tweets.find((t)=>t.id === id);
    console.log(tweet);
    if(tweet){
        tweet.text = text;
        res.status(200).send(tweets);
    }else{
        res.status(404).json({
            message: `not found id : ${id}`
        });
    }
    
    
})

// DELETE /tweets/:id
router.delete('/:id', (req, res, next) => {
    // 내가 한 방식 ( 잘 모르겠어서 포기 )
    /**
    const id = req.params.id;
    const data = tweets.find(t => t.id === id);
    if (data) {

    } else {
        res.sendStatus(204);
    }
    res.status(200).send(tweets);
     */
    const id = req.params.id;
    tweets = tweets.filter((t) => t.id !== id);
    res.status(204).send(tweets);
})


export default router;