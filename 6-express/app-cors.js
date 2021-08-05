import express from "express";
import cors from 'cors';

const app = express();
// cors : 원칙적으로 서버와 클라이언트가 다른 도메인(IP) 에 있으면 서로 어떠한 리소스도 참조하지 못한다
// 하지만 그런것을 가능하려면 클라이언트측에서 req 할때 header 에 길게 추가해서 보내줘야 하는데 그건 너무 기니까 
// npm cors 설치 후 이렇게 적용해주면 서로 다은 도메인에서도 리소스를 주고 오갈수 있다.
// 그리고 옵션을 줘서 이런식으로 특정ip 를 등록을 해주는것이 완전 모르는 외부도메인에서 하는것을 방지할수 있고 보안상 좋다 
app.use(cors({
    origin: ['http://xxx.x.x.x:5500']
}));

app.get('/', (req, res, next) => {
    res.send("welcome !");
})



app.listen(8080);