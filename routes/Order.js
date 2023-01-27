const router = require("express").Router()
const Order = require("../models/Sales_Order")
const {verifyTokenandAuthorization,
        verifyToken,
        verifyTokenandAdmin 
      } = require("./verifyToken")




      //CREATE
    router.post("/",verifyToken, async(req,res)=>{
    const newOrder = new Order(req.body)
    try{ 
          const saveOrder= await newOrder.save()
         res.json(saveOrder)
    }catch(err){
        res.json(err) 
    }
    
})


 //DELETE
router.delete("/:id",verifyTokenandAdmin, async(req,res)=>{
    
    try{
       await Order.findByIdAndDelete(req.params.id)
         res.json("Order has been deleted")
    }catch(err){
        res.json(err)
    }
})





 //GET ALL 
router.get("/",verifyTokenandAdmin, async(req,res)=>{
 
    try{
         const orders= await Order.find()
   
        res.json(orders)
    }catch(err){
        res.json(err)
    }
})




module.exports=router