import  express  from "express";
import {login, getMyProfile,newUser} from "../controllers/user.js"
import {singleAvatar} from "../middlewares/multer.js"
import { isAuthenticated } from "../middlewares/auth.js";

const app=express.Router();

// here not a login user

app.post("/new",singleAvatar, newUser);
app.post("/login",login);


// Here Logged in user

app.use(isAuthenticated);

app.get("/me", getMyProfile)

export default app;         
                                    
 
