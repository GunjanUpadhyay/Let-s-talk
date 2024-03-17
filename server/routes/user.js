import { express } from "express";

const app=express.Router();

app.get("/",(req,res)=>{
    res.send("HEHHvldsn");
})

export default app;