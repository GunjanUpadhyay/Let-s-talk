import { compare } from "bcrypt";
import {User} from "../models/user.js";
import { sendToken } from "../utils/features.js";
import { TryCatch } from "../middlewares/error.js";
import { ErrorHandler } from "../utils/utility.js";
import { cookieOptions } from "../utils/features.js";

// Create a new user and save it to the database & save in coookieee
const newUser = async (req, res) => {

  const {name,username,password,bio}=req.body;

  const avatar = {
    public_id: "dcnjsdndk",
    url: "nisgdvi",
  };
  const user=await User.create({
    name,
    bio,
    username,
    password,
    avatar,
  });

  sendToken(res,user,201,"User is created")
};


// Login Codeee ----&---cookie save
const login = TryCatch(async (req, res,next) => {

  const {username,password}=req.body;

  const user=await User.findOne({username}).select("+password")
  if(!user) return next(new ErrorHandler("Invaild Username",404));
  
 

  const isMatch=await compare(password,user.password);
  if(!isMatch) return next(new ErrorHandler("Invaild Password",404));


  sendToken(res,user,200,`Welcome Back,${user.name}`);
});

const getMyProfile= TryCatch(async(req,res)=>{
  const user=await User.findById(req.user);
  res.status(200).json({
    success: true,
    user,
  });
});

// logout
const logout= TryCatch(async(req,res)=>{
  
 return res.status(200).cookie("letsTalk-token","",{...cookieOptions,maxAge:0}).json({
    success: true,
    message:"Logout out Successfully",
  });
});
const searchUser= TryCatch(async(req,res)=>{
  const {name}=req.query;

  
  return res.status(200).json({
     success: true,
     message:name,
   });
 });



export { login, newUser,logout,getMyProfile,searchUser };
