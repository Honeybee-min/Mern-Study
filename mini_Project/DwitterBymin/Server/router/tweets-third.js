import express from "express";
import {
    body
} from "express-validator";
import helmet from "helmet";
import * as tweetController from "../controller/tweet.js"
import {
    validate
} from "../middleware/validator.js"

const router = express.Router();
const validatorTweet = [
    body("text")
    .trim()
    .isLength({
    min: 3})
    .withMessage("text는 최소 3글자 이상이어야 합니다"), validate]


// GET /tweets
// GET /tweets?username=username
// contorller 연결시 함수를 (()) 를 호출하는게 아니라 연결해줘야 한다
router.get('/', tweetController.getTweets);


// GEt /tweets/:id
// 내가 생각한 방식 
/**
const id = req.params.id;
const data = id ? tweets.find(t => t.id === id) : res.sendStatus(204);
res.status(200).send(data);
 */
router.get('/:id', tweetController.getTweet);


// POST /tweets
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
router.post('/',validatorTweet, tweetController.createTweet);

// PUT /tweets/:id
// 내가 한 방식 
/**
const id = req.params.id;
const content = req.body.text;
const data = tweets.find(t => t.id === id);
data ? data.text = content : res.sendStatus(204);
res.send(tweets);
*/
// 
router.put('/:id',validatorTweet, tweetController.updateTweet);


// DELETE /tweets/:id
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
router.delete('/:id', tweetController.deleteTweet);
export default router;