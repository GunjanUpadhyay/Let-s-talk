import  express  from "express";
import {login} from "../controllers/user.js"
const app=express.Router();

app.get("/login",login);
//console.log('user side');

export default app;         
