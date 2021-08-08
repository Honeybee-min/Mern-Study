import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import tweetsRouter from "./router/tweets-third.js";

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));

app.use('/tweets',tweetsRouter);

app.use((req,res,next)=>{
    res.status(404).send("Not Found ! XD");
})

app.use((error,req,res,next)=>{
    console.error(error);
    res.status(500).send("sorry");
})


app.listen(8080);

