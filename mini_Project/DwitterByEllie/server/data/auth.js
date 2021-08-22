import bcrypt from "bcrypt";


let auths = [

];
export function create(username, pwd , name, email, url) {
    const password = bcrypt.hashSync(pwd,10);
    const auth = {
        id: Date.now().toString(),
        username,
        password,
        name,
        email,
        url
    }
    auths = [auth, ...auths];
    console.log(auths);
    return [auth.password,auth.username];
}

export function login(username,password){
    console.log(auths);
    console.log(auths.username);
    console.log(username);
    const auth = auths.find((data) => data.username === username);
    const result = bcrypt.compareSync(password,auth.password);
    console.log(auth);
    console.log(result);
    if(auth){
        if(result){
            return [username,auth.password];
        }
    }else{
        
    }
}