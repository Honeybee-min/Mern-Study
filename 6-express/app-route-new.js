import express from "express";
import postRouter from "./router/post.js"
import userRouter from "./router/user.js"


const app = express();

app.use(express.json());

// 쭉 나열한 route 보다 더 나은 ver

app.use('/posts',postRouter);   // /posts 경로에 관련된건 postRouter 을 사용하라고 선언한다 
app.use('/users',userRouter);   


// 이렇게 하고 router 폴더 하나 만들어서 각 경로별로 거기서 다루면 된다 

app.listen(8080);