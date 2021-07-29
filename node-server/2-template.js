// https2 도 있지만 이건 모든 브라우저에 https 로 적용이 되는데 이건 ssl 이랑 기타 보안 그런게 없으므로 http 사용
const fs = require('fs');
const http = require('http');
const ejs = require('ejs');

const name = 'MIN';
const courses = [
    {name: "HTML"},
    {name: "CSS"},
    {name: "EJS"}
];

const server = http.createServer((req, res) => {

    const url = req.url;
    res.setHeader('Content-Type', 'text/html');

    if (url === '/') {
        // ejs 를 동해 파일을 읽는데 해당 경로에서 name 이면 name 으로 매핑해서 넘겨주고 
        // promise 를 return 하니까 정상적(.then) 이라면 그 data 를 write 를 이용해서 계속 쓸수도 있고 
        // 한번만 보내도 되는거면 end 에 데이터를 포함해서 전달해줄수 있다 
        ejs.renderFile('./template/index.ejs', {
            name: name
        }).then(data => res.end(data)) // key value 같으면 생략하고 {name} 가능

    } else if (url === '/courses') {
        ejs.renderFile('./template/courses.ejs', {
            courses:courses
        }).then(data => res.end(data)) // key value 같으면 생략하고 {name} 가능
    } else {
        ejs.renderFile('./template/not-found.ejs', {
            name: name
        }).then(data => res.end(data)) // key value 같으면 생략하고 {name} 가능

    }


});

// 서버의 어떤 포트에서 이걸 듣고 있을건지 지정을 해준다 
server.listen(8080);