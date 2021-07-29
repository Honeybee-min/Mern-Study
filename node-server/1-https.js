// https2 도 있지만 이건 모든 브라우저에 https 로 적용이 되는데 이건 ssl 이랑 기타 보안 그런게 없으므로 http 사용
const fs = require('fs');
const http = require('http'); 
//const http = require('http2');
/**
console.log(http.STATUS_CODES);  http의 상태코드들을 볼수 있다
console.log(http.METHODS);      http 의 메서드들을 볼 수 있다
*/
// createServer api 를 통해서 서버를 만들수 있다 
const server = http.createServer((req,res)=>{
    /**
    console.log('server open !');
    console.log(req.headers);
    console.log(req.httpVersion);
    console.log(req.method);
    console.log(req.url);
    */
    const url = req.url;
     
    if(url === '/'){

        res.setHeader('Content-Type','text/html');
        const read = fs.createReadStream('./html/index.html');
        read.pipe(res);

        // write 로 그냥 적지 말고 setHeader 로 html 임을 알려준뒤 html 코드를 써보다 
        /**
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>MIN!</title></head>');
        res.write('<body><h1>Welcome ! </h1></body>');
        res.write('</html>');
         */
        //res.write('Welcome !');

    } else if(url === '/courses'){
        res.setHeader('Content-Type','text/html');
        fs.createReadStream('./html/courses.html').pipe(res);

        /**
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>Courses</title></head>');
        res.write('<body><h1>hello !</h1></body>');
        res.write('</html>');
         */
        //res.write('Courses');
    }else{
        res.setHeader('Content-Type','text/html');
        fs.createReadStream('./html/not-found.html').pipe(res);
        /**
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>sorry </title></head>');
        res.write('<body><h1>Not Found !  </h1></body>');
        res.write('</html>');
         */
        //res.write('not found !');
    }
   

});

// 서버의 어떤 포트에서 이걸 듣고 있을건지 지정을 해준다 
server.listen(8080);