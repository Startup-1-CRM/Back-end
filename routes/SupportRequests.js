const router = require("express").Router()
const SupportRequests = require("../models/SupportRequests")
const {verifyTokenandAuthorization,
        verifyToken,
        verifyTokenandAdmin 
      } = require("./verifyToken")




       //CREATE
    router.post("/",verifyToken, async(req,res)=>{
    const newSupportRequests = new SupportRequests(req.body)
    try{ 
          const saveCart= await newSupportRequests.save()
         res.status(200).json(saveCart)
    }catch(err){
        res.status(500).json(err)
    }
  
})









 //DELETE
router.delete("/:id",verifyTokenandAdmin, async(req,res)=>{
    
    try{
       await SupportRequests.findByIdAndDelete(req.params.id)
         res.status(200).json("Cart has been deleted")
    }catch(err){
        res.status(500).json(err)
    }
})





// // //GET ALL 
router.get("/",verifyTokenandAdmin, async(req,res)=>{
 
    try{
         const SupportRequests= await support_requests.find()
   
        res.status(200).json(SupportRequests)
    }catch(err){
        res.status(500).json(err)
    }
})




module.exports=router 