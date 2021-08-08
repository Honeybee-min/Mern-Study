import express from "express";
import postRouter from "./router/post.js";
import userRouter from "./router/user.js";
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';

const app = express();

// 유용한 미들웨어 
// REST API 에서 body 를 파싱할때 사용함
app.use(express.json());    

// express.json() 처럼 req 의 쿠키를 보려면 이렇게 해줘야한다 
app.use(cookieParser());

// 매번 로그를 수작업으로 찍지 않고 자동으로 로그를 찍어준다  어떤 포맷으로 로그를 남길건지 옵션을 줄수 있고 기본은 combined
app.use(morgan('combined'));

// HTML 에서 Form 에서 submit 하면 자동으로 req 가 발생하는데 그때 전달된 데이터를 body 안에 자동으로 파싱해주는 녀석
// 아무 옵션도 안주면 에러 발생하므로 extended:true of false 반드시 사용(객체안에 객체를 파싱할 수 있게 하려면 true)
app.use(express.urlencoded({extended: false}));  

// 공통적으로 보안에 필요한 header 내용을 자동으로 추가해준다 
app.use(helmet());

// 정적 파일을 제공해주는 미들웨어 아래 링크로 설명 참고
// https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=pjok1122&logNo=221545195520
//app.use(express.static('public'));

app.get('/',(req,res,next)=>{
    // 그냥 이렇게만 하면 안나오고 express.json() 을 해줘야 뜬다 
    console.log(req.body);  
    // 마찬가지로 req의 쿠키를 그냥 보려면 undefined 가 뜬다 
    console.log(req.cookies);
})


app.listen(8080);