const jwt = require("jsonwebtoken")

const verifyToken =(req,res,next)=>{
    const authHeader = req.headers.token
    if(authHeader){
        const token=authHeader.split(" ")[1]
        jwt.verify(token,process.env.JWT_SEC,(err,user)=>{
            if(err) res.json("Token not valid")
            req.user=user
            next()
        })
    }else{
         res.json("You are not Authenticated")
    }
}



const verifyTokenandAuthorization =(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        }else{
            res.json("You are not Allow") 
        }
    })
   
}



const verifyTokenandAdmin =(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.isAdmin){
            next()
        }else{
            res.json("You are not an Admin")
        }
    })
   
}



module.exports={verifyToken,verifyTokenandAuthorization,verifyTokenandAdmin}