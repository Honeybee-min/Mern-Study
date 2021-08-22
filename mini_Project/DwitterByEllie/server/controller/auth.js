import * as authRepository from "../data/auth.js"


export function createAuth(req, res, next) {
    const {
        username,
        password,
        name,
        email,
        url
    } = req.body;
    const auth = authRepository.create(username, password, name, email, url);
    res.status(201).json(auth);
}

export function loginAuth(req,res,next){
    const {username,password} = req.body;
    const login = authRepository.login(username,password);
    res.status(201).json(login);

}