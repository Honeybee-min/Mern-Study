const jwt = require("jsonwebtoken");

const secret = 'qWWs01Sn3yNjKtqLqm3z3rX%BoP3^lXJDTi';
const token = jwt.sign({
    "id" : "min",
    "isAdmin" : true,
}, secret,
{expiresIn : 2});

setTimeout(()=>{
    jwt.verify(token,secret,(error,decode)=>{
        console.log(error,decode);
    })
    

},3000)



console.log(token);