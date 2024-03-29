
import jwt from "jsonwebtoken"

const isAuthenticated= (req,res,next) => {
    const token =req.cookies["letsTalk-token"];
   if(!token)
   return next(new ErrorHandler("Please Login to access",401))

   const decodedData=jwt.verify(token,process.env.JWT_SECRET);

   req.user=decodedData._id;                               

   
    next();
};

export {isAuthenticated};