import express  from "express";
import userRoute from "./routes/user.js"

const app=express();

app.use("/user",userRoute)

app.get("/",(req,res)=>{res.send("knfv")})

app.listen(3000,()=>{
    console.log("server")
})
// model : 36:24 min
