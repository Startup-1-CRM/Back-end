const router = require("express").Router()
const User = require("../models/User")
const {verifyTokenandAuthorization,verifyToken, verifyTokenandAdmin} = require("./verifyToken")

//UPDATE
router.put("/:id",verifyTokenandAuthorization, async(req,res)=>{
    if(req.body.password){
        req.body.password= CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
            ).toString() 
    }
    try{
        const updateduser = await User.findByIdAndUpdate(req.params.id,
            {
            $set:req.body
        },
        {new:true}
        )
        res.json(updateduser)
    }catch(err){
        res.json(err)
    }
})




//DELETE
router.delete("/:id",verifyTokenandAuthorization, async(req,res)=>{
    
    try{
       await User.findByIdAndDelete(req.params.id)
         res.json("User has been deleted")
    }catch(err){
        res.json(err)
    }
})


//GET USER
router.get("/find/:id",verifyTokenandAdmin, async(req,res)=>{
    try{
       const user= await User.findById(req.params.id)
        const {password,...others} = user._doc
   
        res.json(others)
    }catch(err){
        res.json(err)
    }
})


//GET ALL USER
router.get("/",verifyTokenandAdmin, async(req,res)=>{
    const query = req.query.new
    try{
       const users= query? await User.find().sort({_id:-1}).limit(1) 
       : await User.find()
   
        res.json(users)
    }catch(err){
        res.json(err)
    }
})






module.exports=router