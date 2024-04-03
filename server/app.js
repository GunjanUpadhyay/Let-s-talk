import express  from "express";
import { connectDB } from "./utils/features.js";
import dotenv from 'dotenv'
import { errorMiddleware } from "./middlewares/error.js";
import cookieParser from "cookie-parser";
import {createUser} from './seeders/user.js'

// Routes  
import userRoute from "./routes/user.js"
import chatRoute from "./routes/chat.js"
import { createGroupChats, createMessagesInAChat, createSingleChats } from "./seeders/chat.js";

dotenv.config({
    path: "./.env",
});
 const mongoURI= process.env.MONGO_URI;
 const port =process.env.PORT || 3000;

 connectDB(mongoURI);

// createSingleChats(10);
// createGroupChats(10);
// createMessagesInAChat("660d9671fc992efbcdf980ff",30)

const app=express();

// Middleware  heree===============
app.use(express.json());
app.use(cookieParser());


app.use("/user",userRoute)
app.use("/chat",chatRoute)

app.get("/",(req,res)=>{res.send("knfv")});

app.use(errorMiddleware);

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})

