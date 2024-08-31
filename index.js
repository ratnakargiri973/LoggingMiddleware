import express from 'express';
import { loggingMiddleware } from './loggingMiddleware.js';


const port = 7050;
const hostname = "127.0.0.1";
const app = express();
app.use(express.json());
app.use(loggingMiddleware);


app.get("/", (req, res)=>{
    res.send("Hello, Welcome to Geekster");
})

app.get("/about" ,(req, res)=>{
    res.send("Hi, I'm Ratnakar Giri from Bangalore");
})
app.listen(port, hostname, ()=>{
    console.log("Server has started at port " +port);
})