const jwt=require('jsonwebtoken')

const verifyToken=(req,res,next)=>{
    console.log("****jsomwebtoken",req.headers);
  let authHeader=req.headers.token
  if(authHeader){
    const token=authHeader.split(" ")[1];
    console.log("$$$$token",token);
    jwt.verify(token,process.env.JWT_SEC,(err,user)=>{
        if(err) res.status(403).json("token is not valid")
        req.user=user;
    console.log("#####user",user);
    next();
    })
  }
  else{
    return res.status(401).json("you are not authenticated")
  }
}
const verifyTokenAndAuthorization=(req,res,next)=>{
    verifyToken(req,res,()=>{
        console.log("#####req.user.id",req.user.id)
        console.log("#####req.params.id",req.params.id)
        if(req.user.id===req.params.id){
            next();
        }else{
            res.status(403).json("you are not authorized");
        }
    })
}
module.exports={verifyToken,verifyTokenAndAuthorization}