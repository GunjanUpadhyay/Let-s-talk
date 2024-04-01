import  express  from "express";
import {login, getMyProfile,newUser, logout,searchUser} from "../controllers/user.js"
import {singleAvatar} from "../middlewares/multer.js"
import { isAuthenticated } from "../middlewares/auth.js";

const app=express.Router();

// here not a login user

app.post("/new",singleAvatar, newUser);
app.post("/login",login);


// Here Logged in user

app.use(isAuthenticated);

app.get("/me", getMyProfile);
app.get("/logout", logout);
app.get("/search",searchUser);

export default app;         
                                    
 
