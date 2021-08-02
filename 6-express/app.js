import express from "express";
const app = express();

// 🤣🤣🤣🤣🤣🤣🤣🤣 GET 🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣
// ========= 평범한 루트 페이지 접속 후  req method ===========
/**
app.get('/', (req, res, next) => {
   
    console.log(`경로 : ${req.path}`);
    console.log(req.headers)
    console.log(req.query);
    console.log(req.params);
    
    res.send('main Home');
})
*/

// ============= req , res 를 통한 여러 메서드 ============
/**
app.get('/person/:id', (req, res, next) => {
    // ============ request ================
    // /Person/아이디명 으로 접속시 :id의 param 에 해당값이 req 들어온다 
    console.log(req.params.id);
    ///Person/아이디명?키워드명=키워드값 으로 하면 query에 해당값이 req 들어온다 
    console.log(req.query.keywords);

    // ============ response================
    // res.send({name:"min"});      JSON 도 보내줄수 있고
    // res.status(201).send('created');    STATUS CODE 상태코드도 보내줄수 있고
    // res.setHeader('key','value');   Header도 보내줄수 있다(key,value 꼴로)

})
 */
// =============== 미들웨어 체이닝 ==================
// 같은 경로에 동일하게 미들웨어 등록이 가능하다 
// 또한 한 경로에 대해서 여러 미들웨어를 등록가능하다 아래처럼 ,
/**
app.get('/',
    (req, res, next) => {
        // 실행을 하면 응답(res) , next 아무것도 하지 않았으므로 first가 찍히고 무동작 상태이다 
        console.log('first !');
        // 아무것도 보내지 않고 다음으로 넘어가면(next()) 현재 라우터 안에 두번째로 등록된 미들웨어로 가서 first2 로 체이닝되어 실행된다 
        //next();
        // 단 route 라는걸 넘기면 바로 다음 체이닝된건 실행안되고 넘어가서 second 가 찍힌다 
        //next('route');
        // 별도 처리하지 않고 에러를 던지면 에러가 뜬다 그래서 항상 어플리케이션 마지막에는 app.use 를 통해 에러 핸들러를 반드시 만들어 주어야 한다 아래쪽 참고 !
        //next(new Error());
        // 아무튼 같은 경로로 여러 미들웨어가 있으면 먼저 send 한놈이 이기거나 next 등 처리를 해주어야 한다
        res.send('hello !');
    },
    (req, res, next) => {
        console.log('first2 !');
        next();
    })

app.get('/', (req, res, next) => {
    console.log('sencond !');
})
 */
// ================== 가장 마지막에 있는 내가 지정하지 않은 경로로 들어오면 이러한 처리를 해주겠다  ==================
/**
app.use((req,res,next)=>{
    res.status(404).send("not found !");
})
 */
// ================== 위에서 말했던 에러 핸들러 ==================
/**
app.use((error,req,res,next)=>{
    console.error(error);
    res.status(500).send("sorry !")     //  사용자에게는 서버에러 상태코드 500과 페이지를 던져준다
}) */

// 🤣🤣🤣🤣🤣🤣🤣🤣 POST 🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣

// 이렇게만 해서 postman 에서 쏴주면 undefinded 가 나온다 
// express 에서 요청(req) 의 body 를 읽으려면 express 에서 지원하는 미들웨어를 사용해야한다 
// 아래처럼 모든 JSON 요청에 대해 지원해주는 미들웨어를 적어주면 알아서 post 요청시 파싱해서 처리해준다
app.use(express.json());
app.post('/', (req, res, next) => {
    console.log(req.body);
})

app.listen(8080);