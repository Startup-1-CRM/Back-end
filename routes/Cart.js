const router = require("express").Router()
const Cart = require("../models/Cart")
const {verifyTokenandAuthorization,
        verifyToken,
        verifyTokenandAdmin 
      } = require("./verifyToken")




//       //CREATE
    router.post("/",verifyToken, async(req,res)=>{
    const newCart = new Cart(req.body)
    try{ 
          const saveCart= await newCart.save()
         res.status(200).json(saveCart)
    }catch(err){
        res.status(500).json(err)
    }
  
})





// // //UPDATE
router.put("/:id",verifyTokenandAuthorization, async(req,res)=>{
    
    try{
        const updatedcart = await Cart.findByIdAndUpdate(req.params.id,
            {
            $set:req.body
        },
        {new:true}
        )
        res.status(200).json(updatedcart)
    }catch(err){
        res.status(500).json(err)
    }
})




// // //DELETE
router.delete("/:id",verifyTokenandAuthorization, async(req,res)=>{
    
    try{
       await Cart.findByIdAndDelete(req.params.id)
         res.status(200).json("Cart has been deleted")
    }catch(err){
        res.status(500).json(err)
    }
})


// // //GET USER CART
router.get("/find/:userId",async(req,res)=>{
    try{
       const cart= await Cart.findOne({userId:req.body.params.userId})
    
        res.status(200).json(cart)
    }catch(err){
        res.status(500).json(err)
    }
})


// // //GET ALL 
router.get("/",verifyTokenandAdmin, async(req,res)=>{
 
    try{
         const carts= await Cart.find()
   
        res.status(200).json(carts )
    }catch(err){
        res.status(500).json(err)
    }
})




module.exports=router