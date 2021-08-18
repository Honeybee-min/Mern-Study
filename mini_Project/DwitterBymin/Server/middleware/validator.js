import {
    validationResult
} from "express-validator";

export const validate = (req, res, next) => {
    const errors = validationResult(req);
    console.log('output in !');
    if (errors.isEmpty()) {
        console.log("in 2")
        next();
    }else{
        return res.status(400).json({
            "message": errors.array()[0].msg
        })
    }


}