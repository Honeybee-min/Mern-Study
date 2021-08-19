import express from "express";
import { body, param, validationResult} from "express-validator"

const app = express();
app.use(express.json());

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if(errors.isEmpty()){next();}
    return res.status(400).json({"message" : errors.array()[0].msg})

}


app.post('/users',
    [
        body('name').trim().notEmpty().withMessage("이름을 입력하세요 !").isLength({
            min: 2
        }).withMessage('이름은 두글자 이상 입니다 !'),
        body("age").isInt().withMessage("숫자를 입력해"),
        body("email").isEmail().withMessage("이메일을 입력해주세요 !").normalizeEmail(),
        body("job.name").notEmpty().withMessage("직업 이름을 입력하세요"),
        validate
    ],
    (req, res, next) => {
        console.log(req.body);
        /** 
         그냥 직관적으로 이메일의 유효성 검사를 하려면 매우 번거롭다
        if(req.body.email...){
            res.status(400).json({message : "email !"});
        }else if(...){  
        }
        !! npm i express-validator 을 사용하여 , 원래 핸들러에 배열 형식으로 
        */

        res.sendStatus(201);
    })

app.get('/:email',
    param("email").isEmail().withMessage("이메일을 입력해주세요 !"),
    validate,
    (req, res, next) => {
        res.send('💍');
    })


app.listen(8080);