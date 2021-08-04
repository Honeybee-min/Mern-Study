import express from "express";

const router = express.Router();

// router 을 선언하고 아래처럼 체이닝 해주고 
// router 로하면 /posts 경로가 기본이므로 라우트 되어있는거여서 /posts 는 그냥 생략하고 / 으로 쓴다

router.get('/',(req,res,next)=>{
    res.status(201).send('GET: /posts');
});

router.post('/',(req,res,next)=>{
    res.status(201).send('POST: /posts');
});

router.put('/:id',(req,res,next)=>{
    res.status(201).send('PUT: /posts/:id');
});

router.delete('/:id',(req,res,next)=>{
    res.status(201).send('DELETE: /posts/:id');

});

// 최종적으로 export 해주면 된다 
export default router;